import React, { Component } from 'react';
import {View, ActivityIndicator} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text, Icon } from 'native-base';
import {Fire} from '../support/firebase'
import {onLoginSuccess} from '../2.actions'
import {StackActions,NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'

class RegisterScreen extends Component {
  state = {pass : '', confirm : '', loading : false, error : ''}

  componentDidUpdate(){
    if(this.props.user.email){
      const resetAction = StackActions.reset({
        index : 0,
        actions : [NavigationActions.navigate({routeName : 'home'})]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  onBtnRegisterClick = () => {
    if(this.inputEmail && this.state.confirm && this.state.pass){
      if(this.state.confirm == this.state.pass){
        this.setState({loading : true})
        const auth = Fire.auth()
        auth.createUserWithEmailAndPassword(this.inputEmail, this.state.pass)
        .then((val) => {
          var {uid, email} = val.user
          console.log(uid)
          this.props.onLoginSuccess(email, uid)
        })
        .catch((err) => {
          this.setState({error:err.message, loading : false})
        })
      }else{
        this.setState({error : 'Password Tidak Sama'})
      }      
    }else{
      this.setState({error : 'Isi Semua !!'})
    }
  }

  render() {
    console.disableYellowBox = true
    const confirm = this.state.confirm == '' ?
      <Item floatingLabel last>
        <Label>Confirm Password</Label>
        <Input onChangeText={(val)=>this.setState({confirm : val})}/>
      </Item> :
      this.state.confirm !== this.state.pass ?
      <Item floatingLabel last error>
        <Label>Confirm Password</Label>
        <Input onChangeText={(val)=>this.setState({confirm : val})}/>
        <Icon name='close-circle'/>
      </Item> :
      <Item floatingLabel last success>
        <Label>Confirm Password</Label>
        <Input onChangeText={(val)=>this.setState({confirm : val})}/>
        <Icon name='checkmark-circle'/>
      </Item>
    return (
      <Container>
        <Header>
            <Body>
                <Title style={{marginLeft : 15}}>Register</Title>
            </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text)=>this.inputEmail = text}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(val)=>this.setState({pass : val})}/>
            </Item>
            {confirm}
            <Button block style={{width : 200, marginTop : 20, marginHorizontal : 100, borderRadius : 20}} onPress={this.onBtnRegisterClick}>
              {
                this.state.loading
                ?
                <ActivityIndicator size="small" color="white" />
                :
                <Text>Register</Text>
              }
            </Button>
          <View style={{flexDirection : 'row', justifyContent : 'center', marginTop : 20}}>
              <Text onPress={() =>  this.props.navigation.navigate('login')} >Go to Login</Text>
          </View>
          {
            this.state.error ?
            <View style={{paddingVertical : 15, backgroundColor : 'red', marginHorizontal : 15}}>
            <View style={{position : 'absolute', top : 3, right : 3}}>
              <Icon name='close-circle' fontSize={8} color='white' onPress={()=>this.setState({error : ''})}/>
            </View>
            <Text style={{color : 'white', alignSelf : 'center'}}>{this.state.error}</Text>
            </View> :
            null
          }
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user : state.auth
  }
}

export default connect(mapStateToProps,{onLoginSuccess})(RegisterScreen)