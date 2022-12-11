import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

withDefaultColorScheme({
  colorScheme: 'red',
  components: ['Button', 'Badge'],
});

const textStyles = {
  textStyles: {
    h1: {
      fontFamily: `nowharehouse, Fredericka the Great, Cabin Sketch, Metal Mania, Work Sans, Roboto`,
      fontWeight: '400',
      color: '#c6c6c6',
    },
    h2: {
      fontFamily: `cityburn, Lacquer, Allerta Stencil, Metal Mania, Work Sans, Roboto`,
      color: '#800000',
    },
    h3: {
      fontFamily: `oldtypewriter, Special Elite, Work Sans, Roboto`,
      color: '#121212',
    },
    h4: {
      fontFamily: `Work Sans, Roboto`,
      color: '#121212',
    },
  },
};

const fonts = {
  ...chakraTheme.fonts,
  heading: `nowharehouse, Fredericka the Great, Cabin Sketch, Metal Mania, Work Sans, Roboto`,
  body: `oldtyperwriter, Special Elite, Rowdies, Work Sans, Roboto`,
  mono: 'Roboto',
};

const colors = {
  ...chakraTheme.colors,
  black: '#121212',
  white: '#fafafa',
  red: '#800000',
  grey: '#a6a6a6',
  light_grey: '#e8e8e8',
  dark_grey: '#707070',
  darkest_grey: '#474747',
};

const overrides = {
  ...chakraTheme,
  fonts,
  colors,
  textStyles,
  withDefaultColorScheme,
};

const customTheme = extendTheme(overrides);

export default customTheme;
