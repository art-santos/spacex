import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, AspectRatio, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Launches } from "types/launches";

import { youtubeParser } from "utils/functions/youtubeParser";

const HeroVideo = ({ data }) => {
  const videoId = youtubeParser(data.launch.links.video_link);

  return (
    <>
      <Box
        bgColor="black"
        color="white"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        pt={["50px", "50px", "50px", "50px", "0px"]}
      >
        <Link href="/">
          <IconButton 
            position="absolute"
            left="5"
            mt={["-40px", "-50px", "-50px", "-50px", "10px"]}
            color="black"
            bgColor="#fff"
            size="lg"
            fontSize="xl"
            aria-label="back"
            icon={<ArrowBackIcon />}
          />
        </Link>
        <Text fontSize="2xl" fontWeight="bold" p={2}>
          Launched In - {new Date(data.launch.launch_date_utc).toString()}
        </Text>
      </Box>
      <Box
        flexDirection="column"
        bgColor="black"
        justify="center"
        align="center"
        height="50vh"
        pt={[10, 10, 10, 10, 0]}
        backgroundPosition="center"
      >
        <AspectRatio
          maxW={["100%", "100%", "100%", "100%", "75%"]}
          height="100%"
          m="auto"
          border="8px solid white"
          ratio={[1, 1, 1, 1, 16 / 9]}
        >
          <iframe
            title="naruto"
            src={`https://www.youtube.com/embed/${videoId}`}
          />
        </AspectRatio>
      </Box>
    </>
  );
};

export default HeroVideo;
