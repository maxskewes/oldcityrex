import '@fontsource/lacquer';
import '@fontsource/special-elite';
import '@fontsource/fredericka-the-great';
import '@fontsource/cabin-sketch/700.css';
import '@fontsource/metal-mania';
import '@fontsource/special-elite';
import '@fontsource/rowdies';
import "@fontsource/allerta-stencil"
import '@fontsource/work-sans/700.css';
import "@fontsource/roboto-mono/700.css"
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
