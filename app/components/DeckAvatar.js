import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export default class DeckAvatar extends Component  {

//  ({deckName, selected, backgroundImage, onSelectHandler}) => {

    constructor(props) {
      super(props);
      this.state = {
        selected: false
      }
    }

    render(){
      let {deckName, selected, backgroundImage, onSelectHandler} = this.props
      let windowWidth = Dimensions.get('window').width
      let avatarWidth = (windowWidth/2)-20
      return (
        <TouchableHighlight onPress={() => {onSelectHandler(); this.setState({selected: true})}}>
          <View style={[styles.avatar, {width: avatarWidth, height: avatarWidth}, this.state.selected ? {backgroundColor: 'red'} : {}]}>
            <Text style={{fontWeight: 'bold'}}>{deckName}</Text>
          </View>
        </TouchableHighlight>
      )
    }
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: 10
  }
})
