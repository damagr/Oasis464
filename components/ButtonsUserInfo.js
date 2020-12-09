'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ButtonsUserInfo extends Component {
    render() {
        return (
            <View style={style.buttonCollectorBig}>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Cuenta</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Histórico</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Inicio</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
