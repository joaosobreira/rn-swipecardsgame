import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
import {Button} from 'native-base';

export default class Home extends Component{

  static navigationOptions = {
    header: null
  }

  render(){
    let btnWidth = Dimensions.get('window').width/3
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <View style={[styles.btnContainer, {width: btnWidth}]}>
          <Button block style={{margin: 10}} onPress={() => navigate('PreGame')}><Text>Start Game</Text></Button>
          <Button block style={{margin: 10}} onPress={() => navigate('Rules')}><Text>Rules</Text></Button>
          <Button block style={{margin: 10}} onPress={() => navigate('Configs')}><Text>Config</Text></Button>
        </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
