import React from 'react';
import { Center, Text } from '@chakra-ui/react';

function PageHead({ pageHeading }) {
  return (
    <Center
      bgImage="url('/images/bricks-bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH={[100, 100, 200]}
      w="full"
      alignItems="center"
    >
      <Text
        fontFamily="cityburn"
        fontSize="100px"
        textTransform="lowercase"
        letterSpacing={10}
        color="#9e0000"
        height="100%"
        textAlign="center"
      >
        {pageHeading}
      </Text>
    </Center>
  );
}

export default PageHead;
