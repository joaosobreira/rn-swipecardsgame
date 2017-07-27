import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const RoundInfo = ({style, teamName, teamPoints, round}) => (
  <View style={style}>
    <Text>{teamName}</Text>
    <Text>{teamPoints}</Text>
    <Text>Round: {round}</Text>
  </View>
);

export default RoundInfo;
