import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Contact = () => {
  return (
    <Box>
      <PageHead pageHeading='Contact'></PageHead>
      <Container>
          <Text color='white'>Contact</Text>
      </Container>
    </Box>
  );
};

export default Contact;
