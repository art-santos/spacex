import { HStack, FormControl, VStack, Wrap } from "@chakra-ui/react";
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
          <FormControl>
            <Wrap
            direction={["column", "column", "row", "row", "row"]}
            justify="center"
            align="center"
            spacing={[2, 2, 2, 2, 6]}
            width="100%"
            >
            {children}
            </Wrap>
          </FormControl>
        </HStack>
      </VStack>
    </>
  );
};

export default SearchBarContainer;
