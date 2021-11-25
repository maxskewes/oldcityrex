import React, { useState } from 'react';
import { Link, Box, Flex, Text, Button, Stack } from '@chakra-ui/react';
import LogoHead from './LogoHead';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { IoIosCart } from 'react-icons/io';
import navigation from '../navigation';

const NavHead = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <LogoHead />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <GrClose /> : <AiOutlineMenu />}
    </Box>
  );
};

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {navigation.map(nav => {
          return (
            <MenuItem to={nav.route} key={nav.name}>
              <Text display="block">{nav.title}</Text>
            </MenuItem>
          );
        })}
        <IoIosCart />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h={[100, 100, 150, 150]}
      pr={8}
      bg={['yellow', 'orange', 'beige', 'purple']}
      color={'gray'}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavHead;
