'use strict';

import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const style = require('../components/Styles');

export class LogoWithLogOut extends Component {
    render() {
        return (
            <View style={style.logoLogOut}>
                <View>
                    <Image source={require('../assets/Logo.png')}/>
                </View>
                <View style={{justifyContent:'center'}}>
                    <TouchableOpacity style={style.buttonLogOut}>
                        <Text style={style.textButtons}>Desconectar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
