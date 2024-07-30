import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AccentColorProvider } from './Context/AccentColorContext';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';



const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-3jqfs0a66d4d7ume.us.auth0.com"
        clientId="Z8HTZr9eSctTePSX2drtX0d0bHoyk18n"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <AccentColorProvider>
          <App />
        </AccentColorProvider>
      </Auth0Provider>,
    </React.StrictMode>
  </BrowserRouter>
);