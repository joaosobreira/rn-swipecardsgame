import { StackNavigator } from 'react-navigation';
import React, {Component} from 'react';

import Play from './screens/Play.js';
import Home from './screens/Home.js';
import PreGame from './screens/PreGame.js';
import Scoreboard from './screens/Scoreboard.js'

const AppRouteConfigs = {
  Home: {screen: Home},
  PreGame: {screen: PreGame},
  Play: {screen: Play},
  Scoreboard: {screen: Scoreboard}
}

const AppNavigator = StackNavigator(AppRouteConfigs)

export default class AppWithNavigationState extends Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}
