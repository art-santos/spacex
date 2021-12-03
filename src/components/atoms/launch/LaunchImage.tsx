import { Image } from "@chakra-ui/react";
import React from "react";

interface Image {
  image: string
}

const LaunchImage = ({ image }: Image) => {
  return (
    <Image
      src={image}
      boxSize="250px"
      borderRadius="25px"
      boxShadow="md"
      objectFit="cover"
      alt="rocket"
      m={[3, 3, 3, 3, 4]}
    />
  );
};

export default LaunchImage;
