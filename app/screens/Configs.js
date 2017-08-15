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
import {selectNumberOfCardPerRound} from '../modules/deck'

class Configs extends Component{

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      selectedItem1: 2,
      selectedItem2: 20,
      selectedItem3: 10
    }
  }

  _onValue1Change(value){
    this.setState({selectedItem1: value})
  }

  _onValue2Change(value){
    this.setState({selectedItem2: value})
  }

  _onSaveButton(){
    console.log('running save button: ',this.props)
    this.props.dispatch(setNumberOfTeams(this.state.selectedItem1))
    this.props.dispatch(selectNumberOfCardPerRound(this.state.selectedItem2))
    this.props.navigation.navigate('Home')
  }

  render(){

    let btnWidth = Dimensions.get('window').width/3
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <Container>
          <Content>
              <Text style={{marginTop: 20}}>Number of Teams</Text>
              <Picker
                  style={{flex: 1, width: 100}}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selectedItem1}
                  onValueChange={this._onValue1Change.bind(this)}>
                  <Picker.Item label="2" value={2} />
                  <Picker.Item label="3" value={3} />
                  <Picker.Item label="4" value={4} />
                  <Picker.Item label="5" value={5} />
             </Picker>
             <Text style={{marginTop: 20}}>Number of Cards per Round</Text>
             <Picker
                 style={{flex: 1, width: 100}}
                 iosHeader="Select one"
                 mode="dropdown"
                 selectedValue={this.state.selectedItem2}
                 onValueChange={this._onValue2Change.bind(this)}>
                 <Picker.Item label="10" value={10} />
                 <Picker.Item label="20" value={20} />
                 <Picker.Item label="30" value={30} />
                 <Picker.Item label="40" value={40} />
            </Picker>
            <Text style={{marginTop: 20}}>Timer</Text>
            <Picker
                style={{flex: 1, width: 100}}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selectedItem3}
                onValueChange={this._onValue1Change.bind(this)}>
                <Picker.Item label="10" value={10} />
                <Picker.Item label="30" value={30} />
                <Picker.Item label="60" value={60} />
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
