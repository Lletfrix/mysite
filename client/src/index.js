import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './constants/global-styles';

ReactDOM.render(
  <React.StrictMode>
     <GlobalStyle />
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
