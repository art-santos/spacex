import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import React from "react";
import { GiMineExplosion } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import { LaunchesInterface } from "types/launches";

interface Success{
  data: Boolean
}

const TagSuccess = () => {
  return (
    <Tag size="md" key="md" m="5px" variant="subtle" colorScheme="blue">
      <TagLeftIcon boxSize="12px" as={IoMdRocket} />
      <TagLabel>Success</TagLabel>
    </Tag>
  );
};

const TagFail = () => {
  return (
    <Tag size="md" key="md" m="5px" variant="subtle" colorScheme="red">
      <TagLeftIcon boxSize="12px" as={GiMineExplosion} />
      <TagLabel>Failed</TagLabel>
    </Tag>
  );
};

const Success = ({ data }: Success) => {
  return data ? <TagSuccess /> : <TagFail />;
};

export default Success;
