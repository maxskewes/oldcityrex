import { LinkBox, Image, LinkOverlay } from '@chakra-ui/react';
import React from 'react';

function LogoHead() {
  return (
    <LinkBox h='auto' w='auto'>
      <LinkOverlay href='/' h='auto' w='auto'>
      <Image
        h={[150, 150, 200]}
        minH={[150, 150, 200]}
        w={[136, 136, 182]}
        minW={[136, 136, 182]}
        src='/images/ocr-logo.png'
        alt="Old City Records Logo"
        objectFit="fill"
        overflow="visible"
        backgroundRepeat="no-repeat"
      />
      </LinkOverlay>
    </LinkBox>
  );
}

export default LogoHead;
