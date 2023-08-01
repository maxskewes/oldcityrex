import React from 'react';
import { Center, Text } from '@chakra-ui/react';

function PageHead({ pageHeading, children }) {
  return (
    <Center
      bgImage="url('/images/bricks-bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH={[100, 100, 200]}
      w="full"
      flexDirection='column'
    >
      <Text
        fontFamily='cityburn, Lacquer, Allerta Stencil, Metal Mania, Work Sans, Roboto'
        fontSize={[50, 60, 80, 100, 110]}
        textTransform="uppercase"
        letterSpacing={[4, 8]}
        color="red"
        textAlign="center"
        opacity="80%"
        lineHeight='.8'
        pt={[9, null, 16, null]}
        pb={4}
      >
        {pageHeading}
      </Text>
      {children}
    </Center>
  );
}

export default PageHead;
