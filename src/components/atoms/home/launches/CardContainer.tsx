import { Grid } from "@chakra-ui/react";
import React from "react";

const CardContainer = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Grid
        id="card-section"
        w={["100%", "100%", "95%", "90%", "90%"]}
        templateColumns={[
          "1fr",
          "1fr",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr 1fr 1fr",
        ]}
        gap={[10, 10, 10, 10, 14]}
        margin="auto"
        justify="center"
        alignItems="center"
      >
        {children}
      </Grid>
    </>
  );
};

export default CardContainer;
