import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import './index.css';

const store = configureStore({ reducer: reducers, middleware: [thunk] });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
