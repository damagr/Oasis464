'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Input} from 'react-native-elements';

const style = require('../components/Styles');

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>

                    <Logo style={style.logo}/>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity style={style.buttonFees}>
                            <Text style={style.textButtons}>Crear Filtros</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity style={style.buttonFees}>
                        <Text style={style.textButtons}>Crear Batallas</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
    }
}
