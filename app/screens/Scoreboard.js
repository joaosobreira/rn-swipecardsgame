import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ListView
} from 'react-native';
import {connect} from 'react-redux'
import {Button} from 'native-base';

class Scoreboard extends Component{

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.teams.teams)
    };
    console.log('dataSource: ',this.state.dataSource)
  }

  static navigationOptions = {
    header: null
  }


  render(){

    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => <View><Text>{data.name} - {data.points}</Text></View>}
      />
        </View>
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
  listContainer: {
    flex: 5
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
    teams: state.teams
  }
}

export default connect(mapStateToProps)(Scoreboard)
