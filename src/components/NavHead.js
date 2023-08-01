import React, { useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Center,
} from '@chakra-ui/react';
import LogoHead from './LogoHead';
import navigation from '../navigation';
import OCLink from './OCLink';
import { TiShoppingCart } from 'react-icons/ti';

const NavHead = props => {
  return (
    <Box display="flex" direction="row" bg="black" h={[100]}>
      <LogoHead />
      <LinkDiv>
        {navigation.map(nav => {
          return (
            <NavItem
              to={nav.route}
              linkName={nav.title}
              key={nav.title}
              textAlign={nav.textAlign}
            />
          );
        })}
        <Box
          display={['none', null, 'flex']}
          h="100%"
          pr={['0px', null, '.5em', '1em', '2em']}
          sx={{ float: 'right' }}
        >
          <Icon
            as={TiShoppingCart}
            alignSelf="center"
            color="red"
            boxSize={'2em'}
            alignItems="center"
            h="100%"
          />
        </Box>
      </LinkDiv>
    </Box>
  );
};

const NavItem = ({ linkName, to = '/', ...rest }) => {
  return (
    <Box minW={['auto', '45%', 'auto']} mx={['4px', null, 0]}>
      <OCLink to={to} key={rest.key}>
        <Heading
          color="grey"
          fontSize={[28, 32, null, 36, 40]}
          p={0.5}
          fontWeight={400}
          textTransform="uppercase"
          {...rest}
        >
          {linkName}
        </Heading>
      </OCLink>
    </Box>
  );
};

const LinkDiv = ({ children, ...props }) => {
  return (
    <Flex
      py={[1]}
      ml={[2, null, null, 4]}
      mr={[2, null, 0]}
      flexDirection={['row']}
      flexWrap="wrap"
      justifyContent={'space-between'}
      alignItems={['flex-start', null, 'center']}
      flexGrow={1}
      justify="center"
      h={[100, 100, 100, 100]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavHead;
