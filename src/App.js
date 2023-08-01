import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import customTheme from './styles/customTheme';
import Fonts from './assets/fonts';
import NavHead from './components/NavHead';
import NavFoot from './components/NavFoot';
import Landing from './routes/Landing';
import Releases from './routes/Releases';
import Listen from './routes/Listen';
import Merch from './routes/Merch';
import Contact from './routes/Contact';
import { Cart } from './components/Cart/index.tsx';

function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Fonts />
      <NavHead />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="releases" element={<Releases />} />
        <Route path="listen" element={<Listen />} />
        <Route path="merch" element={<Merch />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <NavFoot />
    </ChakraProvider>
  );
}

export default App;
