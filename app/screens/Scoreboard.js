import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ListView
} from 'react-native';
import {connect} from 'react-redux'
import {Button, Container, Content, List, ListItem} from 'native-base';

class Scoreboard extends Component{

  constructor(props){
    super(props);
  }

  static navigationOptions = {
    header: null
  }


  render(){

    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <Text style={{marginTop: 20, fontSize: 30}}>Scoreboard</Text>
        <View style={styles.listContainer}>

          <Container>
              <Content>
                <List dataArray={this.props.teams.teams}
                    renderRow={(data) =>
                        <ListItem>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                              <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.name}</Text>
                              <Text>{data.points}</Text>
                            </View>
                        </ListItem>
                    }>
                </List>
              </Content>
          </Container>
        </View>

        <View style={styles.btnContainer}>
          <Button onPress={() => navigate('GetReady')}><Text>Continue</Text></Button>
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
