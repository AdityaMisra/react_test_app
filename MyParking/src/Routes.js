import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/login';
import Signup from './pages/signup';
import OTPLogin from './pages/otpLogin';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true} />
                    <Scene key="signup" component={Signup} title="Register" />
                    <Scene key="otplogin" component={OTPLogin} title="OTPLogin" />
                </Stack>
            </Router>
        )
    }
}