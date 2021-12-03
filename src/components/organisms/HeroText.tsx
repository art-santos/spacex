import { Heading, Flex } from "@chakra-ui/react";
import React from "react";

const HeroText = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        bgColor="black"
        justify="center"
        align="center"
        height="25vh"
        borderRadius="0px 0px 25px 25px"
      >
        <Flex>
          <Heading color="white" size="2xl" as="h1">
            LAUNCHES
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default HeroText;
