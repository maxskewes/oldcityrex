import { Box } from '@chakra-ui/react';
import PageHead from '../components/PageHead';
import ImageSlider from '../components/ImageSlider';
import { releaseArray } from '../components/ReleaseSliderArray';

const Landing = () => {
  return (
    <Box w="full">
      <PageHead pageHeading="New Releases">
        <ImageSlider imageArray={releaseArray} autoPlay='3' />
      </PageHead>
    </Box>
  );
};

export default Landing;
