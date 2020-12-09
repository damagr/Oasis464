'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Input} from 'react-native-elements';

const style = require('../components/Styles');

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>

                    <Logo style={style.logo}/>

                    <View style={style.inputPosition}>

                        <Input style={style.inputFeatures} placeholder="Introduzca su correo"/>
                        <Input style={style.inputFeatures} placeholder="Introduzca su contraseña"/>
                        <Input style={style.inputFeatures} placeholder="Confirme su contraseña"/>

                    </View>
                </ScrollView>

                <View style={{flex: 0, margin: 10}}>
                    <TouchableOpacity style={style.buttonGeneric}>
                        <Text style={style.textButtons}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
