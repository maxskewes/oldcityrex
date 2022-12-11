import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';

const PageSection = ({ sectionTitle, children }) => {
  return (
    <Box bg="#121212" w="full" h="auto" p={4}>
      <VStack>
        <Heading
          variant="h1"
          color="light_grey"
          fontWeight={400}
          fontSize={[32, 40, 50, 50, 60]}
          pt={4}
          pb={8}
        >
          {sectionTitle}
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {children}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default PageSection;
