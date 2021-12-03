import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import DefaultLogo from "components/atoms/default/Logo";
import ThemeToggle from "components/atoms/default/ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" p={5} boxShadow="md">
      <Heading as="h1" size="md">
        <Link href="/">
          <DefaultLogo />
        </Link>
      </Heading>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
