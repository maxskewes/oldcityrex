import { Box, Text, VStack } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

const Shows = () => {
  return (
    <Box>
      <PageHead pageHeading="Shows"></PageHead>
      <VStack bg="black" h={200} textAlign="center" p={20}>
        <Text color="white" fontSize={30}>
          No current shows listed.
        </Text>
      </VStack>
    </Box>
  );
};

export default Shows;
