import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const NavFoot = () => {
  return (
    <Box bgGradient="linear(to-b, #000000, #9e0000)" h={300}>
      <SimpleGrid>
        <Text>Old City Records</Text>
        <Text>Portland, OR</Text>
        <Text>Footer</Text>
      </SimpleGrid>
    </Box>
  );
};

export default NavFoot;
