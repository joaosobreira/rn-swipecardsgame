import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';

import {chooseDeck} from '../modules/deck';
import {deckActors, deckMovies, deckTVShows} from '../deckSeed';

class PreGame extends Component{

  static navigationOptions = {
    header: null
  }

  render(){

        const { navigate } = this.props.navigation;

    return(

  <View style={styles.container}>
    <View style={styles.btnContainer}>
      <Button onPress={() => this.props.dispatch(chooseDeck(deckActors))}><Text>Actors Deck</Text></Button>
      <Button onPress={() => this.props.dispatch(chooseDeck(deckMovies))}><Text>Movies Deck</Text></Button>
      <Button onPress={() => this.props.dispatch(chooseDeck(deckTVShows))}><Text>TV Shows Deck</Text></Button>
      <Button onPress={() => navigate('Play')}><Text>Play</Text></Button>
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
})



const mapStateToProps = state => {
  console.log('state deck: ',state)
  return {
    deck: state.deck
  }
}



export default connect(mapStateToProps)(PreGame)
