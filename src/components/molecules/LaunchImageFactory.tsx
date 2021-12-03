import { useMediaQuery, Stack, Divider } from "@chakra-ui/react";
import React from "react";
import { Rerousel } from "rerousel";

import LaunchImage from "components/atoms/launch/LaunchImage";

const LaunchImageFactory = ({ data }) => {
  const { launch } = data;
  const customerLogo = React.useRef(null);
  const [isSmallerThan1400] = useMediaQuery("(max-width: 1400px)");

  return (
    <>
      <Stack
        spacing={[0, 0, 0, 2, 2]}
        align="center"
        justify="center"
        marginY={[6, 6, 6, 6, 9]}
        direction={["column", "column", "column", "column", "row"]}
        overflowX="hidden"
      >
        {launch.links.flickr_images && isSmallerThan1400 ? (
          <Rerousel itemRef={customerLogo}>
            {launch.links.flickr_images.map((image, index) => {
              return <LaunchImage key={index} image={image} />;
            })}
          </Rerousel>
        ) : (
          launch.links.flickr_images.map((image, index) => {
            return <LaunchImage key={index} image={image} />;
          })
        )}
      </Stack>
      <Divider />
    </>
  );
};

export default LaunchImageFactory
