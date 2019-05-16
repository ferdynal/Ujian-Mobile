import React, { Component } from 'react';
import {View, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title, Body } from 'native-base';
import {connect} from 'react-redux';
import {Fire} from './../support/firebase';
import {onLoginSuccess} from './../2.actions';
import {StackActions, NavigationActions} from 'react-navigation';

class LoginScreen extends Component {
  state = {error : '', loading : false}

  componentDidUpdate(){
    // did update butuh pengkondisian
    if(this.props.user.email){
      const resetAction = StackActions.reset({
        index : 0,
        actions : [NavigationActions.navigate({routeName : 'home'})]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  onBtnLogin = () => {
    if(this.inputEmail && this.inputPass){
      const auth = Fire.auth()
      auth.signInWithEmailAndPassword(this.inputEmail, this.inputPass)
      .then((val) => {
        var {uid, email} = val.user
        console.log(uid)
        this.props.onLoginSuccess(email, uid)
      })
      .catch((err) => {
        this.setState({error : err.message, loading : false})
      })
    } else {
      this.setState({error : 'Tidak Boleh Ada Yang Kosong!'})
    }
  
  }
  render() {
    console.disableYellowBox = true
    return (
      <Container>
        <Header>
            <Body>
                <Title style={{marginLeft: 15}}>Login {this.props.email}</Title>
            </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText= {(text) => this.inputEmail = text }/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.inputPass = text} />
            </Item>
          </Form>
                <Button block style={{width : 200, marginTop : 20, marginHorizontal : 100, borderRadius : 20}} onPress={this.onBtnLogin}>
                  {
                    this.state.loading
                    ?
                    <ActivityIndicator size="small" color="white" />
                    :
                    <Text>Sign In</Text>
                  }
                </Button>

                <View style={{flexDirection:'row', justifyContent : 'center', marginTop : 15}}>
                    <View style={{height : 60, width : 60}}>
                        <Icon name='twitter' size={40}/>
                    </View>
                    <View style={{height : 60, width : 60 }}>
                        <Icon name='facebook-square' size={40}/>
                    </View>
                    <View style={{height : 60, width : 60}}>
                        <Icon name='google' size={40}/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                    <Text onPress={() => this.props.navigation.navigate('register')}>Belum Punya Akun? Register</Text>
                </View>

                {
                  this.state.error ?
                  <View style={{paddingVertical : 15, backgroundColor : 'red', marginHorizontal : 15}}>
                  <View style={{position : 'absolute', top : 3, right : 3}}>
                    <Icon name='close-circle' fontSize={7} color='white' onPress={() => this.setState({error : ''})}/>
                  </View>  
                    <Text style={{color : 'white', alignSelf : 'center'}}>
                    {this.state.error}
                    </Text>
                  </View>
                  : null
                }
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email : state.auth.email,
    user : state.auth
  }
}

export default connect (mapStateToProps, {onLoginSuccess})(LoginScreen);