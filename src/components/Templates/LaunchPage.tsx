import { Box } from '@chakra-ui/layout'
import LaunchInfo from '../atoms/launch/LaunchInfo'
import LaunchStatus from '../atoms/launch/LaunchStatus'
import LaunchImageFactory from '../molecules/LaunchImageFactory'
import LaunchLinkFactory from '../molecules/LaunchLinkFactory'
import HeroVideo from '../organisms/HeroVideo'
import React from 'react'

const LaunchPage = ({ data }) => {
  return (
    <>
      <Box mb={8} spacing={5} w="full">
        <HeroVideo data={data} />
        <LaunchStatus data={data} />
        <LaunchImageFactory data={data} />
        <LaunchInfo data={data} />
        <LaunchLinkFactory data={data} />
      </Box>
    </>
  );
};

export default LaunchPage;
