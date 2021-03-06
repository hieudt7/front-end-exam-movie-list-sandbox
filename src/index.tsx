import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
