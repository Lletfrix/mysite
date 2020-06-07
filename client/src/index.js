import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { GlobalStyle } from './constants/global-styles';

ReactDOM.render(
  <React.StrictMode>
     <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
