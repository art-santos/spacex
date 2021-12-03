import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" width="full" transition="0.5s ease-out">
      <Box>
        <Header />
        <Box as="main" marginY={0}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
