import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Shows = () => {
  return (
    <Box>
      <PageHead pageHeading='Shows'></PageHead>
      <Container>
          <Text color='white'>Shows</Text>
      </Container>
    </Box>
  );
};

export default Shows;
