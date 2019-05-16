import React,{Component} from 'react'
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import LoginPage from '../screen/loginScreen';
import RegisterPage from '../screen/registerScreen';
import AddEmployee from '../screen/AddEmployeeScreen'
import EditEmployee from '../screen/EditEmployeeScreen';
import ListEmployee from '../screen/ListEmployeeScreen'
import EmployeeDetail from '../screen/EmployeeDetail';
import Menu from '../screen/menuStack';
import MenuAccountSetting from '../screen/MenuAccountSetting'

const AccountSetting = createStackNavigator({
    menu : MenuAccountSetting,
    
})

const StackBeranda = createStackNavigator({
    MenuStack : Menu,
    add : AddEmployee,
    edit : EditEmployee,
    list : ListEmployee,
    detail : EmployeeDetail
},{
    headerMode : 'none'
})

StackBeranda.navigationOptions = ({navigation}) => {
    let tabBarVisible = false

    let routeName = navigation.state.routes[navigation.state.index].routeName
    if(routeName == 'MenuStack'){
        tabBarVisible = true
    }return{
        tabBarVisible
    }
}

const HomeTab = createMaterialTopTabNavigator({
    beranda : StackBeranda,
    account : AccountSetting
},{
    tabBarPosition : 'bottom',
    swipeEnabled : false
})

const StackRoot = createStackNavigator({
    login : LoginPage,
    register : RegisterPage,
    home : HomeTab
}, {
    headerMode : 'none',
    //initialRouteName : 'home'
})

export const StackContainer = createAppContainer(StackRoot)