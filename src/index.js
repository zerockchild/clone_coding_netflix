import React from 'react';
import ReactDOM from 'react-dom';
// <<<<<<< HEAD
// <<<<<<< HEAD
// import App from './app/App';
// =======
import App from './App';
// >>>>>>> 0c9b8ac428bf36dd54b26f1c9c5c54a087903adf
import { Provider } from 'react-redux';
import createStore from './trunks/store';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
{/* =======
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> chimco */}
  </React.StrictMode>,
  document.getElementById('root')
);