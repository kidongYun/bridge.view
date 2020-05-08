import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);