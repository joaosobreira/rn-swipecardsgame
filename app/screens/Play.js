import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import {Button, DeckSwiper, Card, CardItem} from 'native-base';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements'

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
      timerStatus: true, // just for tests
      timerId: undefined
    }
  }

  componentDidMount() {
    this._countdown();
  }


  _countdown(){
    let timer = () => {
      if(this.state.timerStatus)
        return;
      var time = this.state.timeLeft - 1;
      this.setState({timeLeft: time});
      if (time > 0) {
        let timerId = setTimeout(timer, 1000);
        this.setState({timerId: timerId})
      } else {
        this.props.navigation.navigate('GetReady')
        //this.setState({timeLeft: 10});
        //
        //setTimeout(timer, 1000);
        //Teste - aqui seria o callback para o final da ronda
        //this._skipCard();
      }
    };
    if(this.state.timerStatus)
      this.setState({timerStatus: false})
    let timerId = setTimeout(timer, 1000);
    this.setState({timerId: timerId});
  }

  _skipCard = () => {
    if(this.props.session.round!=1)
      this.props.dispatch({type: 'SKIP_CARD'});
  }

  _guessCard = () => {
    if(this.props.deckSize==1){
      clearTimeout(this.state.timerId);
      this.props.navigation.navigate('Scoreboard')
    }
    this.props.dispatch({type: 'GUESS_CARD_ASYNC'});
  }


  render(){
    console.log('this.props: ',this.props);
    let {activeDeck, baseDeck, currentCard} = this.props.deck;
    let timerIcon;

    if(this.state.timerStatus){
      timerIcon = <Icon name="play" type="font-awesome" onPress={() => this._countdown()}/>
    } else {
      timerIcon = <Icon name="pause" type="font-awesome" onPress={() => this.setState({timerStatus: true})}/>
    }

    return(
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <RoundInfo  style={{flex: 1, borderWidth: 2, borderColor: 'blue', alignSelf: 'stretch'}}
                      teamName={this.props.teams.teams[this.props.teams.activeTeam].name}
                      teamPoints={this.props.teams.teams[this.props.teams.activeTeam].points}
                      round={this.props.session.round}/>
          <Timer      style={{flex: 4, borderWidth: 2, borderColor: 'red', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}
                      timeLeft={this.state.timeLeft}/>
          <View        style={{flex: 1, borderWidth: 2, borderColor: 'green', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center'}}>
            {timerIcon}
          </View>
        </View>


        <View style={styles.deckContainer}>
          <Text style={styles.cardText}>{currentCard.value}</Text>
        </View>


        <Text>{this.props.deckSize}</Text>
        <View style={styles.btnContainer}>
          <Icon
            name="md-checkmark-circle"
            type="ionicon"
            color="green"
            size={60}
            iconStyle={{margin: 10}}
            onPress={() => this._guessCard()}
            raised={true}
          />
          <Icon
            name="md-close-circle"
            type="ionicon"
            color="red"
            size={60}
            iconStyle={{margin: 10}}
            onPress={() => this._skipCard()}
            raised={true}
          />
        </View>
        <View style={styles.btnContainer}>

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
