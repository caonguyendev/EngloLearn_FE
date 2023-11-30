import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/index.scss';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="80048975329-0djhc326tp56olj8kdn9e0qf8j7gnerq.apps.googleusercontent.com">
      <App />  
    </GoogleOAuthProvider>;
  </Provider>,
  document.getElementById('root'),
);
