import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import Home from './src/homeScreen'
import Login from './src/loginScreen'

const tab =createMaterialTopTabNavigator({
    home : {
        screen : Home,
        navigationOptions : {
            title : 'HOME',
            tabBarIcon : ({tintColor}) => <Icon name='home' color={tintColor} size={20} />
        }
    },
    login : {
        screen : Login,
        navigationOptions : {
            title : 'LOGIN',
            tabBarIcon : ({tintColor}) => <Icon name='sign-in' color={tintColor} size={20} />
        }
    },
},{
    tabBarPosition : 'bottom',
    tabBarOptions : {
        showIcon : true,
        activeTintColor : '#ffbb93',
        style : {
            backgroundColor : '#8d8d8d'
        },
        indicatorStyle : {
            position : 'absolute',
            top : 0,
            height : 2
        }
    }
})

const TabContainer = createAppContainer(tab)

class IconButton extends Component {
    render() {
        console.disableYellowBox = true
        return (
            <TabContainer/>
        );
    }
}
export default IconButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});