import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import getIcon from './Icons'

const ErrorScreen = () => {
return (
    <Flex direction="column" justify="center" textAlign="center">
        <Heading>Sorry, Nothing was returned from your search =(</Heading>
        <Flex direction="column" alignItems="center" fontSize={22}>{getIcon("rocket")}</Flex>
    </Flex>
)
}

export default ErrorScreen
