import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { TiShoppingCart } from 'react-icons/ti';
import OCLink from './OCLink';

const NavFoot = () => {
  return (
    <Box
      w="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, black, #9e0000)"
      color="black"
      pt={20}
      pb={50}
    >
      <VStack>
        <HStack alignContent="center" spacing={10} pb={12} color="darkest_grey">
          <a href="https://www.facebook.com/oldcityrex/">
            <RiFacebookBoxFill fontSize={40} p={14} />
          </a>
          <OCLink to="/cart">
            <TiShoppingCart fontSize={40} p={14} />
          </OCLink>
        </HStack>
        <Text fontSize={24} textTransform="lowercase">
          nick@old-city-records.com
        </Text>
        <Text fontSize={40} textTransform="uppercase">
          Old City Records
        </Text>
        <Text fontSize={40} textTransform="uppercase">
          Portland, OR
        </Text>
      </VStack>
    </Box>
  );
};

export default NavFoot;
