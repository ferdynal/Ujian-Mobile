import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class Menu extends Component {
    render() {
        console.disableYellowBox = true
        return (
            <View style={styles.container}>
                <View style={{flexDirection : 'row',
                              justifyContent : 'space-between',
                              marginTop : 60,
                              marginHorizontal : 25}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('add')} style={{justifyContent : 'center', height : 100, width : 100, borderRadius : 8, backgroundColor : 'pink'}}>
                        <Text style={{alignSelf : 'center'}}>Add Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('edit')} style={{justifyContent : 'center', height : 100, width : 100, borderRadius : 8, backgroundColor : 'maroon'}}>
                        <Text style={{alignSelf : 'center'}}>Edit Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('list')} style={{justifyContent : 'center', height : 100, width : 100, borderRadius : 8, backgroundColor : 'pink'}}>
                        <Text style={{alignSelf : 'center'}}>List Employee</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});