import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    signup() {
        Actions.signup()
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <LoginForm />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29b6f6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});