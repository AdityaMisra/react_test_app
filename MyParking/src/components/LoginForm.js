import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Animbutton from './animbutton'

export default class LoginForm extends Component {
    
    constructor() {
        super();
        this.state = {
            emailOrPhone: '',
            password: '',
            isOTPLogin: false,
            buttonName: 'Login',
            displayPassword: true,
            emailOrPhone: "Email or Phone"
        }
    }

    redirectToOTPLogin() {
        Actions.otplogin()
    }

    toggleOTPLogin() {

        this.updateValue(!this.state.isOTPLogin, 'isOTPLogin');
        this.updateValue(!this.state.displayPassword, 'displayPassword');
        
        // setting password and emailOrPhone fields to blank
        this.updateValue('', 'password');
        this.updateValue('', 'emailOrPhone');

        if (this.state.buttonName == "Login"){
            this.updateValue('Generate OTP', 'buttonName');
            this.updateValue('Phone', 'emailOrPhone');
        }else{
            this.updateValue('Login', 'buttonName');
            this.updateValue('Email or Phone', 'emailOrPhone');
        }
        // console.warn(this.state)
    }

    onPressFunctionCall() {
        // console.warn(this.state)
        if (this.state.isOTPLogin){
            this.generateOTP()
            this.redirectToOTPLogin()
        }
        else{
            this.loginMotorist()
        }
    }

    updateValue(text, field) {
        this.setState({ [field]: text });
    }

    loginMotorist() {
        let collection = {}
        collection['emailOrPhone'] = this.state.emailOrPhone
        collection['password'] = this.state.password

        // console.warn(collection)

        // fetch('https://app.parkshed.com/login/', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(collection),
        // }).then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    generateOTP(){
        Alert.alert(
            'Generating OTP',
            '',
            [
                // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Ok', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder={this.state.emailOrPhone}
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(text) => this.updateValue(text, 'emailOrPhone')}
                    value={this.state.emailOrPhone}
                />
                {
                    this.state.displayPassword ?<TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    returnKeyType='go'
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                    onChangeText={(text) => this.updateValue(text, 'password')}
                    value={this.state.password} 
                />:null
                }

                <Animbutton onColor={"#fbc02d"} effect={"rubberBand"} _onPress={ this.toggleOTPLogin.bind(this) } text="Login with OTP" />
                
                <TouchableOpacity style={styles.button}
                    onPress={this.onPressFunctionCall.bind(this)}>
                    <Text style={styles.buttonText}>{this.state.buttonName}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.googleButtonText}>Sign in with Google</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        paddingVertical: 7
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ef5350',
        textAlign: 'center'
    },
    googleButton: {
        width: 175,
        backgroundColor: '#fafafa',
        borderRadius: 5,
        marginVertical: 20,
        paddingVertical: 10
    }
});