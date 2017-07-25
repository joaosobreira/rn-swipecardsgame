import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import AppWithNavigationState from './navigator';
import {store} from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}
