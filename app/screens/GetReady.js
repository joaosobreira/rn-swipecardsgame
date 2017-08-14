import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux'

class GetReady extends Component{

  static navigationOptions = {
    header: null
  }

  render(){

    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <Text>
          {this.props.activeTeamName}
        </Text>
        <View style={styles.btnContainer}>
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
    teams: state.teams,
    activeTeamName: getActiveTeamName(state)
  }
}



export default connect(mapStateToProps)(GetReady)
