import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from 'next/image';

import getIcon from "components/atoms/default/Icons";
import { LaunchesInterface, Links } from "types/launches";
import Success from "components/atoms/default/SuccessTag";
import DefaultLink from "components/atoms/default/Link";
import CardSkeleton from "../atoms/home/launches/Card/CardSkeleton";

interface Data {
  data: LaunchesInterface;
}

const getImage = (data: Links) => {
  if (data.flickr_images.length > 0) {
    return data.flickr_images[0];
  }
  return data.mission_patch;
};

const Card = React.memo(({ data }: Data) => {
  const link = getImage(data.links);

  return (
    <>
      <DefaultLink Href={`/launch/${data.id}`} >
        <CardSkeleton>
          <Flex justify="center" 
          borderRadius="25px 25px 0px 0px" 
          align="center"
          overflow="hidden"
          >
            <Image
              height={200}
              width={350}
              src={link as string}
              className="image-card"
              alt={data.mission_name as string}
              layout="intrinsic"
              quality={90}
            />
          </Flex>
          <Success data={data.launch_success}/>
          <Box justify="center" align="center">
            <Heading as="h3" size="lg">
              {data.mission_name}
              <Text fontSize="xs">{data.launch_year}</Text>
            </Heading>
            <Heading as="h4" size="xs" mt={2}>
              {data.mission_id[0]}
            </Heading>
          </Box>
          <Flex justify="space-between" p={2} align="center">
            <Flex p={1}>
              {getIcon("rocket")}
              <Text fontSize="xs">
                {data.rocket.rocket_name} <strong>|</strong>
              </Text>
            </Flex>
            <Flex p={1}>
              {getIcon("truck")}
              <Text p={1} fontSize="xs">
                {data.rocket.second_stage.payloads[0].payload_type}
                <strong>|</strong>
              </Text>
            </Flex>
            <Flex p={1}>
              {getIcon("weight")}
              <Text p={1} fontSize="xs">
                {data.rocket.rocket.mass.lb} lbs
              </Text>
            </Flex>
          </Flex>
        </CardSkeleton>
      </DefaultLink>
    </>
  );
});

export default Card;
