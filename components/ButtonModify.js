'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ModifyButton extends Component {
    render() {
        return (
            <View style={style.buttonsModifyMain}>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <Text style={style.textButtons}>Modificar</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
