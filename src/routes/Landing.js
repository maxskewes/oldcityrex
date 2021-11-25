import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Landing = () => {
  return (
    <div>
      <PageHead pageHeading="releases out now" />
      <Text fontFamily='nowharehouse' fontSize='xl'color='white'>Landing</Text>
    </div>
  );
};

export default Landing;
