import { LinkBox, Image } from '@chakra-ui/react';
import React from 'react';

function LogoHead() {
  return (
    <LinkBox href="/">
      <Image
        boxSize="20px"
        bgImage="url('/images/ocr-logo.jpg')"
        alt="Old City Records Logo"
        objectFit="scale-down"
        overflow="visible"
        backgroundRepeat="no-repeat"
      />
    </LinkBox>
  );
}

export default LogoHead;
