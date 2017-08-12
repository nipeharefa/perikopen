import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
