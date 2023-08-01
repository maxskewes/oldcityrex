import { LinkBox, Image, LinkOverlay } from '@chakra-ui/react';
import React from 'react';

function LogoHead() {
  return (
    <LinkBox mx={[0, null, null, 4]}>
      <LinkOverlay href='/' h='auto' w='auto'>
      <Image
      // postition={['static', null, 'sticky']}

        w={['100px', '120px', '128px', '136px', '180px']}
        minW={['100px', '120px', '128px', '136px', '180px']}
        src='/images/ocr-logo.jpg'
        alt="Old City Records Logo"
        objectFit="fill"
        backgroundRepeat="no-repeat"
      />
      </LinkOverlay>
    </LinkBox>
  );
}

export default LogoHead;
