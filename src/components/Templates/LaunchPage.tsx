import { Box } from '@chakra-ui/layout'
import LaunchInfo from '../atoms/launch/LaunchInfo'
import LaunchStatus from '../atoms/launch/LaunchStatus'
import LaunchLinkFactory from '../molecules/LaunchLinkFactory'
import HeroVideo from '../organisms/HeroVideo'
import dynamic from 'next/dynamic'
import React from 'react'
import { Spinner } from '@chakra-ui/react'

const LaunchPage = ({ data }) => {

  const DynamicImageFactory = dynamic(
  () => import('../molecules/LaunchImageFactory'),
  {loading: () => <Spinner />},
  )

  return (
    <>
      <Box mb={8} spacing={5} w="full">
        <HeroVideo data={data} />
        <LaunchStatus data={data} />
        <DynamicImageFactory data={data} />
        <LaunchInfo data={data} />
        <LaunchLinkFactory data={data} />
      </Box>
    </>
  );
};

export default LaunchPage;
