import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const DeckAvatar = ({deckName, selected, backgroundImage, onSelectHandler}) => {
  let windowWidth = Dimensions.get('window').width
  let avatarWidth = (windowWidth/2)-20

  return (
    <TouchableHighlight onPress={onSelectHandler}>
      <View style={[styles.avatar, {width: avatarWidth, height: avatarWidth}]}>
        <Text style={{fontWeight: 'bold'}}>{deckName}</Text>
      </View>
    </TouchableHighlight>
  )
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

export default DeckAvatar;
