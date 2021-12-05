import { LinkBox, LinkOverlay, Text, Box, Icon } from "@chakra-ui/react";

import getIcon from "../default/Icons";
import DefaultLink from "../default/Link";

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
        <DefaultLink Href={ data }>
          <LinkOverlay>{getName(source as string)}</LinkOverlay>
        </DefaultLink>
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
