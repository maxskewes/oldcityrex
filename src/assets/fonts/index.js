import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'nowharehouse';
        font-style: 'normal';
        font-weight: 500;
        font-display: swap;
        src: url('./Nowharehouse.ttf')
    }
    @font-face {
        font-family: 'cityburn';
        font-style: 'normal';
        font-weight: 500;
        font-display: swap;
        src: url('./cityburn.ttf')
    }
    @font-face {
        font-family: 'oldtypewriter';
        font-style: 'normal';
        font-weight: 500;
        font-display: swap;
        src: url('./oldtypewriter.ttf')
    }
    `}
  />
);

export default Fonts;
