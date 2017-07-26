import { StackNavigator } from 'react-navigation';
import React, {Component} from 'react';

import Play from './screens/Play.js';
import Home from './screens/Home.js';

const AppRouteConfigs = {
  Home: {screen: Home},
  Play: {screen: Play}
}

const AppNavigator = StackNavigator(AppRouteConfigs)

export default class AppWithNavigationState extends Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}
