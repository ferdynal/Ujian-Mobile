import React, {Component} from 'react'
import {StackContainer} from './src/routers/stackRoot'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Reducer from './src/1.reducers'

const store = createStore(Reducer,{},applyMiddleware(ReduxThunk))

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <StackContainer/>
      </Provider>
    )
  }
}





// import React, { Component } from "react";
// import { 
//   View,
//   Text,
//   StyleSheet,
//   Button
// } from "react-native";

// import {createStackNavigator, createAppContainer} from 'react-navigation'

// class HomePage extends Component {
//   handleButton = () => {
//     this.props.navigation.navigate('login')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Home Page</Text>
//         <Button title='ke Halaman Login' onPress={this.handleButton}/>
//       </View>
//     );
//   }
// }

// class LoginPage extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Login Page</Text>
//       </View>
//     );
//   }
// }

// const stack = createStackNavigator ({
//   home : HomePage,
//   login : LoginPage
// })

// const stackContainer = createAppContainer(stack)

// export default stackContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });