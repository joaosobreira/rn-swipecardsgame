import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  Dimensions
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';


import {chooseDeck} from '../modules/deck';
import {deckActors, deckMovies, deckTVShows, deckMusic} from '../deckSeed';

import DeckAvatar from '../components/DeckAvatar';

class PreGame extends Component{

  static navigationOptions = {
    header: null
  }

  render(){

    const { navigate } = this.props.navigation;
    let screenwidth = Dimensions.get('window').width;


    return(
/*
  <View style={styles.container}>
    <View style={styles.rowContainer}>
      <Button onPress={() => this.props.dispatch(chooseDeck(deckActors))}><Text>Actors Deck</Text></Button>
      <Button onPress={() => this.props.dispatch(chooseDeck(deckMovies))}><Text>Movies Deck</Text></Button>
    </View>
    <View style={styles.rowContainer}>
      <Button onPress={() => this.props.dispatch(chooseDeck(deckTVShows))}><Text>TV Shows Deck</Text></Button>
    </View>
    <Button onPress={() => navigate('Play')}><Text>Play</Text></Button>
  </View>
*/
  <View style={styles.container}>
    <View style={styles.avatarScrollContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.avatarRowContainer}>
          <DeckAvatar deckName='Actors' onSelectHandler={() => this.props.dispatch(chooseDeck(deckActors))}/>
          <DeckAvatar deckName='TV Shows' onSelectHandler={() => this.props.dispatch(chooseDeck(deckTVShows))}/>
          <DeckAvatar deckName='Dummy' />
          <DeckAvatar deckName='Dummy' />
        </View>
        <View style={styles.avatarRowContainer}>
          <DeckAvatar deckName='Movies' onSelectHandler={() => this.props.dispatch(chooseDeck(deckMovies))} />
          <DeckAvatar deckName='Music' onSelectHandler={() => this.props.dispatch(chooseDeck(deckMusic))}/>
          <DeckAvatar deckName='Dummy' />
          <DeckAvatar deckName='Dummy' />
          <DeckAvatar deckName='Dummy' />
        </View>
      </ScrollView>
    </View>
    <View style={styles.btnContainer}>
      <Button block style={{position: 'absolute', bottom: 0, width: screenwidth}} onPress={() => navigate('Play')}><Text>Play</Text></Button>
    </View>
  </View>
)
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row'
  },
  avatarScrollContainer: {
    flex: 5
  },
  btnContainer: {
    flex: 1,
    //borderWidth: 2,
    //borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarRowContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignItems: 'flex-start'
  }
})



const mapStateToProps = state => {
  //console.log('state deck: ',state)
  return {
    deck: state.deck
  }
}




export default connect(mapStateToProps)(PreGame)
