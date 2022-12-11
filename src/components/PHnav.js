import React, { useState } from 'react';
import { Link, Box, Flex, Text, Stack, Container, Grid, Heading } from '@chakra-ui/react';
import LogoHead from './LogoHead';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { IoIosCart } from 'react-icons/io';
import navigation from '../navigation';

const NavHead = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Grid direction="row" bg="black" justify="space-between" h={[100]}>
      <LogoHead />
      <NavBarContainer {...props}>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </Grid>
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
      <Text
        // display="block"
        fontSize={[20, 24, 20, 32, 40]}
        color="grey"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      w="100%"
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%' }}
    >
      <Stack
        spacing={2}
        // align="right"
        justify={['center', 'space-between', 'space-between', 'space-between']}
        direction={['column', 'row', 'row', 'row']}
        // pt={[4, 4, 0, 0]}
      >
        {navigation.map(nav => {
          return (
            <MenuItem to={nav.route} key={nav.name}>
              <Heading fontWeight={400} color='grey' textTransform='uppercase'>{nav.title}</Heading>
            </MenuItem>
          );
        })}
        {/* <IoIosCart size={40} /> */}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      float="right"
      align="right"
      justify="space-around"
      h={[100, 100, 100, 100]}
      p={10}
      color='#c6c6c6'
      {...props}
      flexGrow={1}

    >
      {children}
    </Flex>
  );
};

export default NavHead;
