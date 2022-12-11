import React from 'react';
import { Box, Container, Text, Center, VStack } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Contact = () => {
  return (
    <Box>
      <PageHead pageHeading="Contact"></PageHead>
      <VStack bg='black' h={200} textAlign='center' p={20}>
          <Text color="white" fontSize={30}> please email: <br/> nick@old-city-records.com</Text>
      </VStack>
    </Box>
  );
};

export default Contact;
