import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { store } from '../store/configureStore' 

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HabitsApp />
        </Provider>
      </div>
    );
  }
}
