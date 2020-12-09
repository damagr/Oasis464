'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ButtonBet extends Component {
    render() {
        return (
            <View style={style.buttonCollectorBig}>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Apostar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
