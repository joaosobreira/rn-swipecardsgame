import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import {Button, DeckSwiper, Card, CardItem} from 'native-base';
import {connect} from 'react-redux';

import Timer from '../components/Timer';
import RoundInfo from '../components/RoundInfo';
import {goToNextRound} from '../actions/sessionActions';
import {goToNextTeam} from '../modules/teams'
import {guessCardSaga, getDeckLenght} from '../modules/deck'

//import {deckMovies} from '../deckSeed';

//const deck = deckMovies

class Play extends Component{

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 10,
      activePlayer: 0,
      stopCountdown: false, // just for tests
    }
  }

  componentDidMount() {
    //console.log('state deck: ',this.props.deck);

    //this._shuffle(activeDeck);
    //console.log('shuffled deck: ',activeDeck);
    //let newCurrentCard = activeDeck.shift();
    //this.setState({currentCard: newCurrentCard});
    //this.setState({activeDeck: activeDeck});
    //this._countdown(); // Commented for tests
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
        this.props.dispatch(goToNextTeam());
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
    this.props.dispatch({type: 'SKIP_CARD'});
  }

  _guessCard = () => {
    if(this.props.deckSize==1){
      this.props.navigation.navigate('Scoreboard')
    }
    this.props.dispatch({type: 'GUESS_CARD_ASYNC'});

/*
    console.log('Deck Size ',this.state.activeDeck.length);
    let activeDeck;

    if(this.state.activeDeck.length == 0){
      // End of Round
      let currentRound = this.state.round;
      // If it is the end of the last round
      if(currentRound+1>3)
        // End Game
        return;
      //this.setState({round: currentRound+1})
      //onNextRound();
      this.props.dispatch({type: 'GOTO_NEXT_ROUND'})
      activeDeck = JSON.parse(JSON.stringify(this.state.baseDeck));
      this._shuffle(activeDeck);
      console.log('shuffled deck: ',activeDeck);

    } else {
      activeDeck = this.state.activeDeck;
      console.log('activeDeck: ',activeDeck);
    }
    console.log('activeDeck2: ',activeDeck);
    let newCurrentCard = activeDeck.shift();
    this.setState({currentCard: newCurrentCard});
    this.setState({activeDeck: activeDeck});
    console.log('activeDeck: ',this.state.activeDeck);
    console.log('baseDeck: ',this.state.baseDeck);

    let {teams} = this.state;
    let currentTeamScore = this.state.teams[this.state.activeTeam].points;
    teams[this.state.activeTeam].points = currentTeamScore+1
    this.setState({teams: teams});
    //console.log('Active Player Score: ',this.state.activePlayerScore);
*/
  }


  render(){
    console.log('this.props: ',this.props);
    let {activeDeck, baseDeck, currentCard} = this.props.deck;

    return(
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <RoundInfo  style={{flex: 1, borderWidth: 2, borderColor: 'blue', alignSelf: 'stretch'}}
                      teamName={this.props.teams.teams[this.props.teams.activeTeam].name}
                      teamPoints={this.props.teams.teams[this.props.teams.activeTeam].points}
                      round={this.props.session.round}/>
          <Timer      style={{flex: 4, borderWidth: 2, borderColor: 'red', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}
                      timeLeft={this.state.timeLeft}/>
          <View        style={{flex: 1, borderWidth: 2, borderColor: 'green', alignSelf: 'stretch'}}>
          </View>
        </View>


        <View style={styles.deckContainer}>
          <Text style={styles.cardText}>{currentCard.value}</Text>
        </View>


        <Text>{this.props.deckSize}</Text>
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
    borderColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  deckContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  cardText: {
    fontSize: 30
    //borderWidth: 2,
    //borderColor: 'black'
  },
  btnContainer: {
    flex: 1,
    //borderWidth: 2,
    //borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  //console.log('state round: ',state)
  return {
    session: state.session,
    deck: state.deck,
    teams: state.teams,
    deckSize: getDeckLenght(state)
  }
}
/*
const mapDispatchToProps = dispatch => {
  return {
    onNextRound: dispatch(goToNextRound())
  }
}
*/



export default connect(mapStateToProps)(Play)
