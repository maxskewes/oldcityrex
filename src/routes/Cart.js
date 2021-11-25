import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Cart = () => {
  return (
    <Box>
      <PageHead pageHeading='Cart'></PageHead>
      <Container>
          <Text color='white'>Cart</Text>
      </Container>
    </Box>
  );
};

export default Cart;
