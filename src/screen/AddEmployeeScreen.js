import React, { Component } from 'react';
import {Text ,Container, Header, Content, Form, Item, Input, Label,Button ,Picker,Left,Right } from 'native-base';
import {Fire} from '../support/firebase'
import {connect} from 'react-redux'

class AddEmployee extends Component {
  state = {selected : 'Monday'}

  onBtnAddClick = () => {
    var nama = this.inputNama
    var phone = this.inputPhone
    var shift = this.state.selected
    var id = this.props.id
    Fire.database().ref('manager/users/' + id + '/employee').push({
      nama, phone, shift
    })
    .then((val)=>{
      alert('Data Masuk')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(text)=>this.inputNama = text}/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input onChangeText={(text)=>this.inputPhone = text}/>
            </Item>
            <Item>
                <Left>
                    <Label>Select Day</Label>
                </Left>
                <Right>
                    <Picker 
                        style={{ width:120}}  
                        mode="dropdown"
                        selectedValue={this.state.selected}
                        onValueChange={(value) => this.setState({selected : value})}>
                    <Picker.Item label='Monday' value='Monday' />
                    <Picker.Item label='Tuesday' value='Tuesday' />
                    <Picker.Item label='Wednesday' value='Wednesday' />
                    <Picker.Item label='Thursday' value='Thursday' />
                    <Picker.Item label='Friday' value='Friday' />
                    </Picker>
                </Right>
            </Item>
            <Button style={{width : 250, marginTop : 20, marginHorizontal : 100, borderRadius : 20}}
              onPress={this.onBtnAddClick} block>
                <Text>Add Employee</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  var {id} = state.auth
  return{
    id : id
  }
}

export default connect(mapStateToProps)(AddEmployee)