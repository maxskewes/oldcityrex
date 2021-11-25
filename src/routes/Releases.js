import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Releases = () => {
  return (
    <Box>
      <PageHead pageHeading='Releases'></PageHead>
      <Container>
          <Text color='white'>releases</Text>
      </Container>
    </Box>
  );
};

export default Releases;
