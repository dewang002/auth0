import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";//authentica kar ne k lia
const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const client = process.env.REACT_APP_AUTH0_CLIENT

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider 
     domain={domain}
     clientId={client}
     authorizationParams={{
      redirect_uri:window.location.origin
     }}
    >
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
