import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="nikit4uk.us.auth0.com"
    clientId="QdEF6l36iYZj9W1sZa1mUVRjc5u86QO2"
    redirectUri={window.location.origin}>
    
    <App />
  </Auth0Provider>
);