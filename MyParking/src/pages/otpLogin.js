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
import OTPLoginForm from '../components/OTPLoginForm';


export default class OTPLogin extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Logo />
                <OTPLoginForm />
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
    }
});