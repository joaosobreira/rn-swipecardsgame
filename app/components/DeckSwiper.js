import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper as NBDeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import CardFront from './CardFront'

const DeckSwiper = ({cards}) => (
    <View>
      <NBDeckSwiper
        dataSource={cards}
        renderItem={item =>
          <CardFront text={item.text} />
        }
      />
    </View>
);

export default DeckSwiper;
