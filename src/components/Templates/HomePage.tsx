import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { Waypoint } from "react-waypoint";

import CardFactory from "components/molecules/CardFactory";
import HeroText from "components/organisms/HeroText";
import SearchBar from "components/organisms/SearchBar";
import { useQueryContext } from "context/QueryContext";
import { DataHome, Launches } from "types/launches";

const HomePage = ({ data }: DataHome) => {
  const [load, setLoad] = React.useState(false);
  const { loading, launchData: launches, error, fetchMore } = useQueryContext();

  React.useCallback(() =>{
    if(loading){
      setLoad(false);
    }
  }, [loading])
  

  return (
    <>
      <Box mb={8} w="full">
        <HeroText />
        <SearchBar />
        {error && <p>Error :(</p>}
        {loading && <CardFactory data={ data } />}
        {!loading && <CardFactory data={ launches.launches } />}
        <Box h="10vh" />
        {!loading && (
        <Waypoint
          onEnter={() => {
            setLoad(true);
            fetchMore({
              variables: {
                offset: launches.launches.length + 13 || 0,
                limit: 12,
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
        {load && (
          <Flex id="loading" h="30vh" justify="center" align="center">
            <Spinner id="loading"/>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default HomePage;
