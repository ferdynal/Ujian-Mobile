import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import HomeScreen from './src/screen/homeScreen'
import LoginScreen from './src/screen/loginScreen'
import { createDrawerNavigator , DrawerItems, createAppContainer} from 'react-navigation'

const CostorDrawer = (props) => {
    return(
        <View style={{flex : 1}}>
            <View>
                <Image style={{height : 30, width : 30}} source={{uri : 'https://png2.kisspng.com/sh/c58e2dfa6d94ff2b51e97b01d3f50ddd/L0KzQYm3WMI2N6hvf5H0aYP2gLBuTfdwd5hxfZ92YYD2PcX8kv4uaqoyjOd7bj3xccfwhBF1cZDzRdN3ZILyebW0VfI5OWlpTqUBZUnpdoW1VsQ1QGk7T6Y6NUO4QoK9Wck2PGY4SZD5bne=/kisspng-google-maps-turn-by-turn-navigation-android-5b818d636e9ff4.6448867415352169954531.png'}}/>
                <DrawerItems {...props}/>
            </View>
        </View>
    )
}

const Drawer = createDrawerNavigator({
    Home : HomeScreen,
    Login : LoginScreen
},{
    contentComponent : CostorDrawer
})

const DrawerContainer = createAppContainer(Drawer)


class Hello extends Component {
    render() {
        return (
            <DrawerContainer/>
        );
    }
}
export default Hello;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});