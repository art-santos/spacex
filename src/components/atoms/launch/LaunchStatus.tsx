import { VStack, Text, Divider } from "@chakra-ui/react";
import React from "react";
import Success from "../default/SuccessTag";

const LaunchStatus = ({data}) => {
  const { launch } = data;

  return (
    <VStack align="center" justify="center">
      <Text
        fontSize={["xl", "xl", "2xl"]}
        mt={["10px", "0px"]}
        p={[1, 1, 1, 1, 2]}
        fontWeight="bold"
      >
        {launch.mission_name}
        <Success data={launch} />
      </Text>
      <Text textAlign="center" p={2}>{launch.details}</Text>
      <Divider />
    </VStack>
  );
};

export default LaunchStatus;
