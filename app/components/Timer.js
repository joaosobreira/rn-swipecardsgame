import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const Timer = ({style, timeLeft}) => (
    <View style={style}>
      <Text style={{fontSize: 30}}>{timeLeft}</Text>
    </View>
);

export default Timer;
