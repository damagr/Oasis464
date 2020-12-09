'use strict';

import React, {Component} from 'react';
import {Image, View} from 'react-native';

const style = require('../components/Styles');

export class Logo extends Component {
    render() {
        return (
            <View style={style.logo}>
                <Image source={require('../assets/Logo.png')}/>
            </View>
        );
    }
}
