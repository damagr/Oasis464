'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ButtonsSports extends Component {
    render() {
        return (
            <View style={style.buttonCollector}>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Fútbol</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Basket</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonGenericSmall}>
                    <View>
                        <Text style={style.textButtons}>Tenis</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
