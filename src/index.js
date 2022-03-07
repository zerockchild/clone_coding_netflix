import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import createStore from './app/store';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);