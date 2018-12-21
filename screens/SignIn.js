import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

class SignIn extends React.Component {

    static options() {
        return {

            topBar: {
                title:
                    {
                        text: 'Sign In'
                    }
            }

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SignIn</Text>
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
export default SignIn;