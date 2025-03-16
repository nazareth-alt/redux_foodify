// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Redux Provider
import store from './store/store';  // Import the store
import App from './App';  // Import root App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in the Redux Provider
root.render(
  <Provider store={store}>  
    <App />
  </Provider>
);
