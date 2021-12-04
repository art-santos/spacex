import { Box } from "@chakra-ui/react";
import React from "react";

import SearchBar from "components/organisms/SearchBar";
import { useQueryContext } from "context/QueryContext";
import CardFactory from "components/molecules/CardFactory";
import HeroText from "components/organisms/HeroText";
import LoadingScreen from "components/atoms/home/launches/Loading";
const HomePage = () => {
  const { loading } = useQueryContext();
  const { error } = useQueryContext();

  return (
    <>
      <Box mb={8} w="full">
        <HeroText />
        <SearchBar />
        {error && <p>Error :(</p>}
        {loading && <LoadingScreen />}
        {!loading && <CardFactory />}
        <Box h="10vh" />
      </Box>
    </>
  );
};

export default HomePage;
