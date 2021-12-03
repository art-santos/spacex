import { Stack } from "@chakra-ui/react";
import React from "react";

const LaunchLinkContainer = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <Stack
      spacing={16}
      direction={["column", "row"]}
      w="90%"
      m="auto"
      justify="center"
      marginY="25px"
    >
      {children}
    </Stack>
  );
};

export default LaunchLinkContainer;
