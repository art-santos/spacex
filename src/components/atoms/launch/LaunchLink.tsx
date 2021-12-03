import { LinkBox, LinkOverlay, Text, Box, Icon } from "@chakra-ui/react";
import NextLink from "next/link";

import getIcon from "../default/Icons";

interface Link {
  data: String;
  source: String;
}

const getName = (name:string) => {
  switch (name) {
    case "wikipedia":
      return "See Our Wikipedia Article";
    case "spacex":
      return "See our SpaceX Article";
    case "pdf":
      return "See the mission presskit";
    default:
      return "See Our Wikipedia Article";
  }
};

const LaunchLink = ({ data, source }: Link) => {
  return (
    <LinkBox as="article" p={10} boxShadow="lg" borderRadius="25px" w="100%">
      <Icon as={getIcon(source)} h={50} w={50} />
      <Text fontSize="xl">
        <NextLink href={data as any} passHref>
          <LinkOverlay>{getName(source as string)}</LinkOverlay>
        </NextLink>
      </Text>
      <Box
        as="a"
        color="black"
        textDecoration="underline"
        href={data as any}
        fontWeight="bold"
      >
        SEE ARTICLE &gt;
      </Box>
    </LinkBox>
  );
};

export default LaunchLink;
