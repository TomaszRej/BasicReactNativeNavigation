import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class SignUp extends React.Component {
    static options() {
        return {
            topBar: {
                title:
                    {
                        text: 'Sign Up'
                    }
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
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
export default SignUp;