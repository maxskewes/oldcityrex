import { Box, VStack, Image, Heading, Text, Button } from '@chakra-ui/react';
import PageHead from '../components/PageHead';
import PageSection from '../components/PageSection';

const MerchCard = ({ image, title, subtitle, format, price }) => {
  return (
    <Box
      bg="light_grey"
      minW={200}
      maxW={400}
      minH={350}
      color="black"
      borderRadius={1}
      p={3}
      m={4}
    >
      <VStack>
        <Image
          pb={2}
          maxWidth="100%"
          src={image}
          alt={title}
          borderRadius={2}
        />
        <Heading
          fontSize={30}
          fontWeight={400}
          textAlign="center"
          color="black"
          lineHeight="1.5"
        >
          {title}
        </Heading>
        <Text
          fontFamily="Work Sans, Special Elite, Roboto"
          fontSize={20}
          textAlign="center"
          textTransform="uppercase"
          color="gray"
        >
          {subtitle}
        </Text>
        <Text textAlign="center">{format}</Text>
        <Text fontSize={20}>
          <b>{price}</b>
        </Text>
        <Button variant="outline" borderWidth={3} borderRadius={18}>
          purchase
        </Button>
      </VStack>
    </Box>
  );
};

const Merch = () => {
  return (
    <Box>
      <PageHead pageHeading="Merch"></PageHead>
      <PageSection sectionTitle="T-Shirts">
        <MerchCard
          image="/images/merch/ocr-shirt.jpeg"
          title="Old City Records T-Shirt"
          subtitle="White Ink on Black"
          format="Small, Med, Large, XL"
          price="$15"
        />
        <MerchCard
          image="/images/merch/oldcity-shirt.jpeg"
          title="Old City T-Shirt"
          subtitle="White Ink on Black"
          format="Small, Med, Large, XL"
          price="$15"
        />
        <MerchCard
          image="/images/merch/ocr-shirt.jpeg"
          title="Old City Records T-Shirt"
          subtitle="White Ink on Black"
          format="Small, Med, Large, XL"
          price="$15"
        />
      </PageSection>
    </Box>
  );
};

export default Merch;
