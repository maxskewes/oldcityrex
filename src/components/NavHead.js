import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import LogoHead from './LogoHead';
import navigation from '../navigation';
import OCLink from './OCLink';

const NavHead = props => {
  return (
    <Box
      display="flex"
      direction="row"
      bg="black"
      h={[150, 150, 120, 73, 86]}
      pl={[0, 0, 0, 0, 4]}
    >
      <LogoHead />
      <LinkDivSm>
        {navigation.map(nav => {
          return <NavItem to={nav.route} linkName={nav.title} key={nav.title} />;
        })}
      </LinkDivSm>
    </Box>
  );
};

const NavItem = ({ linkName, to = '/', ...rest }) => {
  return (
    <OCLink to={to} key={rest.key}>
      <Heading
        color="grey"
        fontSize={[18, 24, 32, 32, 40]}
        minW={[]}
        p={.5}
        color="grey"
        fontWeight={400}
        textTransform="uppercase"
        {...rest}
      >
        {linkName}
      </Heading>
    </OCLink>
  );
};

const LinkDivLg = ({ children, ...props }) => {
  return (
    <Flex
      // float="right"
      // align="right"
      justify="space-between"
      h={[100, 100, 100, 100]}
      p={4}
      {...props}
      flexGrow={1}
      flexWrap="wrap"
    >
      {children}
    </Flex>
  );
};

const LinkDivSm = ({ children, ...props }) => {
  return (
    <div
    displa='flex'
      // float="right"
      align="right"
justify='center'
      h={[100, 100, 100, 100]}
      p={6}
      {...props}
    >
      {children}
    </div>
  );
};

export default NavHead;
