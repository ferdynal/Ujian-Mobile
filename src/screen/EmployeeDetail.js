import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
} from "react-native";
import {Fire} from '../support/firebase'
import {connect} from 'react-redux'
import Communications from 'react-native-communications';

class Detail extends Component {
// state ={id:null}
// componentDidMount (){
//     this.setState({id:this.props.navigation.param('key')})
// }
    hapus = (key) => {
        // alert(this.props.)
        Fire.database().ref('manager/users/'+this.props.user.id+'/employee').child(key).remove()
        .then((res)=>{
            alert('database berhasil dihapus')
            this.props.navigation.navigate('list')
        })
        .catch((err)=>{
            alert(err.massage)
        })
    }

    deleteEmployee=(id,name)=>{
        alert(id)
        Alert.alert('delete data', 'are you sure delete '+name+'?',  [{text : 'Yes', onPress :()=> this.hapus(id)}, {text : 'Cancel'}]);
    }

    sendMe

    render() {
        console.disableYellowBox = true
        const {getParam} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>{getParam('nama')}</Text>
                <Text>{getParam('shift')}</Text>
                <Text>{getParam('phone')}</Text>
                <Button title='Hapus Data' onPress={()=>this.deleteEmployee(getParam('key'), getParam('nama'))}>
                </Button>

                <Button title='Send SMS' onPress={() => Communications.text(getParam('phone'), `Hello ${getParam('nama')} your upcoming shift is on ${getParam('shift')}` )}>
                    <View style={styles.holder}>
                    <Text style={styles.text}>Send to</Text>
                    </View>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    holder: {
        flex: 0.25,
        justifyContent: 'center',
    },
    text: {
    fontSize: 32,
    }
})

const mapStateToProps = (state) => {
    return {
        user : state.auth
    }
}


export default connect(mapStateToProps)(Detail)