import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Left,Right, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Fire} from '../support/firebase'
import {connect} from 'react-redux'

class ListEmployee extends Component {
    state = { data :{}}
    componentDidMount () {
        var db = Fire.database()
        var manager = db.ref('manager/users/'+this.props.user.id+'/employee')
        manager.on('value', (Item)=>{
            this.setState({data:(Item.val())})
        },(err)=>{
            console.log(err)
        })
    }
    render() {
        console.disableYellowBox = true
        return (
        <Container>
            <Header />
                <Content>
                    <List>
                        {
                            this.state.data 
                        ?
                            Object.keys(this.state.data).map(val => {
                            return(
                                <ListItem onPress={()=>this.props.navigation.navigate('detail', {
                                    nama : this.state.data[val].nama,
                                    shift : this.state.data[val].shift,
                                    phone : this.state.data[val].phone,
                                    key : val

                                })}>
                            <Left>
                                <Text>{this.state.data[val].nama}</Text>
                            </Left>
                            <Right>
                                <Icon name='chevron-right' size={24}></Icon>
                            </Right>
                        </ListItem>
                            )
                        })
                        :
                        <Text>Data Kosong Bos</Text>
                        }
                    </List>
                </Content>
        </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.auth
    }
}

export default connect(mapStateToProps)(ListEmployee)