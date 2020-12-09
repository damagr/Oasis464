'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ButtonMainScreen extends Component {
    render() {
        return (
            <View style={style.buttonsModifyMain}>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Inicio</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
