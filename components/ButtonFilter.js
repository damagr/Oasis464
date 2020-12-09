'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ButtonFilter extends Component {
    render() {
        return (
            <View style={style.buttonCollectorBig}>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <Text style={style.textButtons}>Filtrar</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
