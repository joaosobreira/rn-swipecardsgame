import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import {Button} from 'native-base';
import Timer from '../components/Timer'

const deck = [
  {value: 'Michael Cera'},
  {value: 'Emma Stone'},
  {value: 'Jennifer Lawrence'}
];

export default class Play extends Component{

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      deck: deck,
      timeLeft: 10,
      //currentCardIndex: 0,
      activePlayerScore: 0,
      currentCard: {}
    }
  }

  componentDidMount() {
    let {deck} = this.state;
    this._shuffle(deck);
    console.log('shuffled deck: ',deck);
    let newCurrentCard = deck.shift();
    this.setState({currentCard: newCurrentCard});
    this.setState({deck: deck});
    this._countdown();
  }

  _shuffle(initialDeck) {
      for (let i = initialDeck.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [initialDeck[i - 1], initialDeck[j]] = [initialDeck[j], initialDeck[i - 1]];
      }
  }

  _countdown(){
    let timer = () => {
      var time = this.state.timeLeft - 1;
      this.setState({timeLeft: time});
      if (time > 0) {
        setTimeout(timer, 1000);
      } else {
        this.setState({timeLeft: 10});
        setTimeout(timer, 1000);
        //Teste - aqui seria o callback para o final da ronda
        this._skipCard();
      }
    };
    setTimeout(timer, 1000);
  }

  _skipCard = () => {
    console.log('Clicked Skip!',this.state.currentCardIndex);
    console.log('Deck Size ',this.state.deck.length);
    let {deck} = this.state;
    deck.push(this.state.currentCard);
    let newCurrentCard = deck.shift();
    this.setState({currentCard: newCurrentCard});
    this.setState({deck: deck});

  }

  _guessCard = () => {
    //console.log('Clicked Guess!',this.state.currentCardIndex);
    console.log('Deck Size ',this.state.deck.length);

    let {deck} = this.state;
    let newCurrentCard = deck.shift();
    this.setState({currentCard: newCurrentCard});
    this.setState({deck: deck});

    let {activePlayerScore} = this.state;
    this.setState({activePlayerScore: activePlayerScore+1});
    console.log('Active Player Score: ',this.state.activePlayerScore);
  }


  render(){

    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Timer timeLeft={this.state.timeLeft}/>
        </View>
        <Text style={styles.cardText}>{this.state.currentCard.value}</Text>
        <Text>{this.state.deck.length}</Text>
        <View style={styles.btnContainer}>
          <Button onPress={() => this._guessCard()}><Text>Guess</Text></Button>
          <Button onPress={() => this._skipCard()}><Text>Skip</Text></Button>
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
  headerContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    flex: 4,
    fontSize: 30,
    textAlignVertical: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },
  btnContainer: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
