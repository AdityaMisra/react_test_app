import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            phoneNumber:'',
            email:'',
            password:''

        }
    }

    updateValue(text, field) {
        this.setState({ [field]: text }); 
    }

    registerMotorist() {
        let collection = {}
        collection['name'] = this.state.name
        collection['phonenumber'] = this.state.phoneNumber
        collection['email'] = this.state.email
        collection['password'] = this.state.password

        console.warn(collection)

        fetch('http://app.parkshed/register/motorist/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(collection),
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Full Name"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    returnKeyType="next"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(text) => this.updateValue(text, 'name')}
                />
                
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Phone Number"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    onChangeText={(text) => this.updateValue(text, 'phoneNumber')}
                />

                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(text) => this.updateValue(text, 'email')}
                />

                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    returnKeyType='go'
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                    onChangeText={(text) => this.updateValue(text, 'password')}
                />

                <TouchableOpacity 
                style={styles.button} 
                onPress={()=>this.registerMotorist()}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
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
    orText: {
        fontSize: 16,
        fontWeight: '500',
        paddingVertical: 6

    }

});