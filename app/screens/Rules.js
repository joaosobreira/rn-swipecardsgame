import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {Button} from 'native-base';

export default class Home extends Component{

  static navigationOptions = {
    header: null
  }

  render(){

    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>

      </View>

    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    //borderWidth: 2,
    //borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
