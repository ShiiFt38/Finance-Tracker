import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AccentColorProvider } from './Context/AccentColorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AccentColorProvider>
        <App />
      </AccentColorProvider>
    </React.StrictMode>
  </BrowserRouter>
);