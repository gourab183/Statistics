import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../store';

export default class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}