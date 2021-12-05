import { Flex } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React from 'react'

const LoadingScreen = () => {
  return (
    <Flex id="loading" h="30vh" justify="center" align="center">
        <Spinner id="loading"/>
    </Flex>
  )
}

export default LoadingScreen
