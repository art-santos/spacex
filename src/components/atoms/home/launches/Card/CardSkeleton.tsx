import { VStack } from '@chakra-ui/layout'
import React from 'react'

const CardSkeleton = ({ children }) => {
  return (
    <>
      <VStack
          borderRadius="25px"
          spacing={3}
          boxShadow="dark-lg"
          width="350px"
          m="auto"
        >
            {children}
        </VStack>
    </>
  )
}

export default CardSkeleton
