import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { Waypoint } from "react-waypoint";

import CardFactory from "components/molecules/CardFactory";
import HeroText from "components/organisms/HeroText";
import SearchBar from "components/organisms/SearchBar";
import { useQueryContext } from "context/QueryContext";
import { Launches } from "types/launches";
import dynamic from "next/dynamic";

const HomePage = () => {

  const DynamicHeroText = dynamic(
    () => import('components/organisms/HeroText'),
  )

  const [load, setLoad] = React.useState(false);
  const { loading, launchData: launches, error, fetchMore } = useQueryContext();

  React.useMemo(() =>{
    if(loading){
      setLoad(false);
    }
  }, [loading])
  

  return (
    <>
      <Box mb={8} w="full">
        <DynamicHeroText />
        <SearchBar />
        {error && <p>Error :(</p>}
        {!loading && <CardFactory data={ launches.launches } />}
        <Box h="10vh" />
        {!loading && (
        <Waypoint
          onEnter={() => {
            setLoad(true);
            fetchMore({
              variables: {
                offset: launches.launches.length + 8 || 0,
                limit: 8,
              },
              updateQuery: (prev: Launches, { fetchMoreResult }) => {
                !fetchMoreResult.launches[0] ? setLoad(false) : setLoad(true);

                if (fetchMoreResult){
                  return {
                    ...prev,
                    launches: [...prev.launches, ...fetchMoreResult.launches],
                  };
                }else if(!fetchMoreResult){
                  setLoad(false)
                }
                return {
                  ...prev,
                  launches: [...prev.launches, ...fetchMoreResult.launches],
                };
              },
            });
          }}
          onLeave={() => {
            setLoad(false);
          }}
        />)}
        {loading || load ? (
          <Flex id="loading" h="30vh" justify="center" align="center">
            <Spinner id="loading"/>
          </Flex>
        ) : null}
      </Box>
    </>
  );
};

export default HomePage;
