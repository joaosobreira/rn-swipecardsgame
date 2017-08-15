import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux'

import {getActiveTeamName} from '../modules/teams'
import {goToNextTeam} from '../modules/teams'

class GetReady extends Component{

  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    console.log('before go to next team: ',this.props.teams.activeTeam)
    this.props.dispatch(goToNextTeam());
    console.log('after go to next team: ',this.props.teams.activeTeam)
  }

  componentDidMount(){
    this.props.dispatch({type: 'SKIP_CARD'});
  }

  render(){

    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>
          Get ready
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>
          {this.props.teams.teams[this.props.teams.activeTeam].name}
        </Text>
        <View style={styles.btnContainer, {marginTop: 20}}>
          <Button onPress={() => navigate('Play')}><Text>Continue</Text></Button>
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
  btnContainer: {
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
    teams: state.teams
  }
}



export default connect(mapStateToProps)(GetReady)
