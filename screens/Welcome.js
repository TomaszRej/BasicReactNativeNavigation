import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Navigation } from 'react-native-navigation';

class WelcomeScreen extends React.Component {
    goToScreen = (screenName) => {
        console.log('hej');
        Navigation.push(this.props.componentId,{
            component:{
                name: screenName
            }
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title='Sing In' onPress={()=>this.goToScreen('SignIn')}/>
                <Button title='Sing Up' onPress={()=>this.goToScreen('SignUp')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default WelcomeScreen;