import React, { Component } from 'react';
import { Root } from "native-base";
import Routes from "./components/routes/routes";
import { configureStore } from "./store/configureStore";
import { Provider } from 'react-redux';

const store = configureStore();

export default class App extends React.Component {
   render() {
      return (
         <Provider store={store}>
            <Root>
               <Routes />
            </Root>
         </Provider>
      );
   }
}
