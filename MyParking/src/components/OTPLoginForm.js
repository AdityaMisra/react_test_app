import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class OTPLoginForm extends Component {
    constructor() {
        super();
        this.state = {            
            otp: ''
        }
    }

    updateValue(text, field) {
        this.setState({ [field]: text });
    }

    validateOTP() {
        let collection = {}
        collection['otp'] = this.state.otp

        console.warn(collection)

        // fetch('http://app.parkshed/register/motorist/', {
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

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="OTP"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    onChangeText={(text) => this.updateValue(text, 'otp')}
                    value={this.state.otp}
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => this.validateOTP()}>
                    <Text style={styles.buttonText}>Submit OTP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});