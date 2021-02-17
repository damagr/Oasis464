import React, {Component} from 'react';
import {Image} from 'react-native';

export class OLogo extends Component {
    render() {
        return (
            <Image source={require('../assets/Logo.png')}/>
        );
    }
}
