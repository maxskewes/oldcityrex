import { Box, VStack, Image, Heading, Text, Button } from '@chakra-ui/react';
import PageHead from '../components/PageHead';
import PageSection from '../components/PageSection';

const AlbumCard = ({ image, band, title, year, format, price }) => {
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
          {band}
        </Heading>
        <Text
          fontFamily="Work Sans, Special Elite, Roboto"
          fontSize={20}
          textAlign="center"
          textTransform="uppercase"
          color="gray"
        >
          {title}
        </Text>
        <Text textAlign="center">{year}</Text>
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

const Releases = () => {
  return (
    <Box>
      <PageHead pageHeading="Releases"></PageHead>
      <PageSection sectionTitle="Vinyl">
        <AlbumCard
          image="./images/releases/over.jpg"
          band="Over"
          title="To The Teeth"
          year="coming in 2022"
          format="12 inch LP"
          price="n/a"
        />
        <AlbumCard
          image="/images/visions-st300.png"
          band="Visions"
          title="Visions s/t"
          year="2020"
          format="12 inch vinyl"
          price="$12"
        />
        <AlbumCard
          image="/images/releases/sunny-days300.jpg"
          band="Old City"
          title="Sunny Days"
          year="2013"
          format="12 inch EP 45rpm"
          price="$12"
        />
        <AlbumCard
          image="/images/releases/fatalState300.jpg"
          band="Fatal State"
          title="Estado Fatal"
          year="2019"
          format="12 inch LP"
          price="$12"
        />
        <AlbumCard
          image="./images/releases/future-dead300.jpg"
          band="Old City"
          title="Future Dead"
          year="2018"
          format="10 inch Vinyl"
          price="$10"
        />
        <AlbumCard
          image="./images/releases/OCsubstance300.jpg"
          band="Old City"
          title="A Substance Never Seen Before"
          year="2020"
          format="Currently Unavailable"
          price="n/a"
        />
      </PageSection>
    </Box>
  );
};

export default Releases;
