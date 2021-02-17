import React, { Component } from 'react';
import { View } from 'react-native';
import { OButton } from '../components/OButton.JS';
import { style } from '../components/OConstants';
import { Logo } from '../components/OLogo';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Logo style={style.logo} />
                <OButton text={'Admin'}></OButton>
                <OButton text={'Invitado'}></OButton>
            </View>
        );
    }
}
