import React, { useState, useRef, useEffect } from 'react';
import { Box, Center, Container, Image } from '@chakra-ui/react';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = props => {
  const { imageArray, ...rest } = props;
  const [current, setCurrent] = useState(0);
  const length = imageArray.length;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    if (rest.autoPlay !== null) {
      const interval = setInterval(play, rest.autoPlay * 1000);
      return () => clearInterval(interval);
    }
  }, [rest.autoPlay]);

  const {
    isOpen,
    nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    },
  } = useDisclosure();

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(imageArray) || imageArray.length <= 0) {
    return null;
  }

  return (
    <Container pb={4}>
      <FaArrowAltCircleLeft onClick={prevSlide} />
      {imageArray.map((img, index) => {
        return (
          <Center key={index}>
            {index === current && (
              <Center boxSize={[150, 200, 280, 320, 400]}>
                <Fade in={isOpen}>
                  <Image src={img.src} alt={img.band} />
                </Fade>
              </Center>
            )}
          </Center>
        );
      })}
      <FaArrowAltCircleRight onClick={nextSlide} />
    </Container>
  );
};

export default ImageSlider;
