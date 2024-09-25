import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setClientTheme } from './setClientTheme';

// Call the function to set the theme based on the current client
setClientTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
