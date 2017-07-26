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
  {value: 'Jennifer Lawrence'},
  {value: 'Anna Kendrick'},
  {value: 'Amanda Seyfried'},
  {value: 'James McAvoy'},
  {value: 'Benedict Cumberbatch'},
  {value: 'Christian Bale'},
  {value: 'Brad Pitt'}
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
      //activePlayerScore: 0,
      currentCard: {},
      activePlayer: 0,
      teams: [
        {
          name: 'Team A',
          points: 0,
          players: [
            {name: 'Player 1A'},
            {name: 'Player 2A'}
          ]
        },{
          name: 'Team B',
          points: 0,
          players: [
            {name: 'Player 1B'},
            {name: 'Player 2B'}
          ]
        }
      ],
    activeTeam: 0,
    stopCountdown: false // just for tests
    }
  }

  componentDidMount() {
    let {deck} = this.state;
    this._shuffle(deck);
    console.log('shuffled deck: ',deck);
    let newCurrentCard = deck.shift();
    this.setState({currentCard: newCurrentCard});
    this.setState({deck: deck});
    //this._countdown(); // Commented for tests
  }

  _shuffle(initialDeck) {
      for (let i = initialDeck.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [initialDeck[i - 1], initialDeck[j]] = [initialDeck[j], initialDeck[i - 1]];
      }
  }

  _countdown(){
    let timer = () => {
      if(this.state.stopCountdown)
        return;
      var time = this.state.timeLeft - 1;
      this.setState({timeLeft: time});
      if (time > 0) {
        setTimeout(timer, 1000);
      } else {
        this.setState({timeLeft: 10});
        this.setState({activeTeam: this.state.activeTeam==0 ? 1 : 0})
        setTimeout(timer, 1000);
        //Teste - aqui seria o callback para o final da ronda
        this._skipCard();
      }
    };
    if(this.state.stopCountdown)
      this.setState({stopCountdown: false})
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

    let {teams} = this.state;
    let currentTeamScore = this.state.teams[this.state.activeTeam].points;
    teams[this.state.activeTeam].points = currentTeamScore+1
    this.setState({teams: teams});
    //console.log('Active Player Score: ',this.state.activePlayerScore);
  }


  render(){

    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Timer timeLeft={this.state.timeLeft}/>
          <Text>{this.state.teams[this.state.activeTeam].name}</Text>
          <Text>{this.state.teams[this.state.activeTeam].points}</Text>
        </View>
        <Text style={styles.cardText}>{this.state.currentCard.value}</Text>
        <Text>{this.state.deck.length}</Text>
        <View style={styles.btnContainer}>
          <Button onPress={() => this._guessCard()}><Text>Guess</Text></Button>
          <Button onPress={() => this._skipCard()}><Text>Skip</Text></Button>
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={() => this._countdown()}><Text>Start Countdown</Text></Button>
          <Button onPress={() => this.setState({stopCountdown: true})}><Text>Stop Countdown</Text></Button>
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
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
