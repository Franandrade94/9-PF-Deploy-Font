import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import myReduxStore from "./Redux/store/index";
import { Auth0Provider } from '@auth0/auth0-react';
import axios from 'axios';

//const { MY_CLIENT_ID, MY_DOMAIN } = process.env;

//axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://pfhenry-back-production.up.railway.app/';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-dlug4fktmn13fvla.us.auth0.com"
      clientId="hNNHGAtgCqEpivQQQ7y2mMP7daprlExQ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={myReduxStore}>
        <App />
    </Provider>
</Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
