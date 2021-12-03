import { HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";

const SearchBarContainer = ({ children }) => {
  return (
    <>
      <VStack marginY={[10, 15, 12]} spacing={0}>
        <HStack
          align="center"
          justify="center"
          spacing={8}
          padding={4}
          width={["95%", "95%", "95%", "100%", "90%"]}
          m="0 auto"
          borderRadius="10px"
          boxShadow="2xl"
        >
          <Stack
            direction={["column", "column", "row", "row", "row"]}
            justify="space-between"
            align="center"
            spacing={[2, 2, 2, 2, 6]}
            width="75%"
          >
            {children}
          </Stack>
        </HStack>
      </VStack>
    </>
  );
};

export default SearchBarContainer;
