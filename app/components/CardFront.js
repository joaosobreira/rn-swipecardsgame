import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper as NBDeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const CardFront = ({text}) => (
<View style={{backgroundColor: 'green'}}>
  <Text>
    {text}
  </Text>
</View>
);

export default CardFront;
