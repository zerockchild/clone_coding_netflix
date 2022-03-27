import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './app/App';
import { Provider } from 'react-redux';
import createStore from './trunks/store';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> chimco
  </React.StrictMode>,
  document.getElementById('root')
);