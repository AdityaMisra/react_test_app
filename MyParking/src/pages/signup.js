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
import SignUpForm from '../components/SignUpForm';

import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <SignUpForm type="Signup" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
        flexGrow: 1,
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