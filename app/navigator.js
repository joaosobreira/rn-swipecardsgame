import { StackNavigator } from 'react-navigation';
import React, {Component} from 'react';

import Play from './screens/Play.js';
import Home from './screens/Home.js';
import PreGame from './screens/PreGame.js';
import Scoreboard from './screens/Scoreboard.js'
import Rules from './screens/Rules.js';
import Configs from './screens/Configs.js'
import GetReady from './screens/GetReady.js'

const AppRouteConfigs = {
  Home: {screen: Home},
  PreGame: {screen: PreGame},
  Play: {screen: Play},
  Scoreboard: {screen: Scoreboard},
  Rules: {screen: Rules},
  Configs: {screen: Configs},
  GetReady: {screen: GetReady}
}

const AppNavigator = StackNavigator(AppRouteConfigs)

export default class AppWithNavigationState extends Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}
