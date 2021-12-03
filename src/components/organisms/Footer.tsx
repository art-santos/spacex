import { Flex, Link, Text } from "@chakra-ui/react";

import DefaultLogo from "components/atoms/default/Logo";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justify="center" align="center">
      <Text fontSize="24" fontWeight="bold">
        {new Date().getFullYear()} -{" "}
        <Link href="https://www.spacex.com/" isExternal>
          <DefaultLogo />
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
