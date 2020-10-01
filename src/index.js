import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store/store.js';
import { Provider } from 'react-redux';
import handleVideoSearch from './actions/search.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleVideoSearch('redux tutorials')(store.dispatch)
);