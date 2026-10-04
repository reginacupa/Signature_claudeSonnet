import '@fontsource/anta/400.css';
import '@fontsource/mr-dafoe/400.css';
import '@fontsource-variable/nunito/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { applyTokens } from './config/tokens.js';
import './styles/index.css';
import App from './App.jsx';

applyTokens();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
