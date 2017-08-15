import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
import { Container, Content, Picker, Button } from 'native-base';
import {connect} from 'react-redux'

import {setNumberOfTeams} from '../modules/teams'

class Configs extends Component{

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      selectedItem: 2
    }
  }

  _onValueChange(value){
    this.setState({selectedItem: value})
  }

  _onSaveButton(){
    console.log('running save button: ',this.props)
    this.props.dispatch(setNumberOfTeams(this.state.selectedItem))
    this.props.navigation.navigate('Home')
  }

  render(){

    let btnWidth = Dimensions.get('window').width/3
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <Text>Number of Teams</Text>
        <Container>
          <Content>
              <Picker
                  style={{flex: 1, width: 100}}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selectedItem}
                  onValueChange={this._onValueChange.bind(this)}>
                  <Picker.Item label="2" value={2} />
                  <Picker.Item label="3" value={3} />
                  <Picker.Item label="4" value={4} />
                  <Picker.Item label="5" value={5} />
             </Picker>
          </Content>
        </Container>

        <View style={[styles.btnContainer, {width: btnWidth}]}>
          <Button block style={{margin: 10}} onPress={this._onSaveButton.bind(this)}><Text>Save</Text></Button>
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
  }
}

export default connect(mapStateToProps)(Configs)
