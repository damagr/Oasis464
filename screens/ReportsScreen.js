'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LogoWithLogOut} from '../components/LogoWithLogOut';

const style = require('../components/Styles');

export default class ReportsScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <LogoWithLogOut/>
                    <View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableOpacity style={style.buttonFees}>
                                <Text style={style.textButtons}>Apuestas de usuarios entre fechas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.buttonFees}>
                                <Text style={style.textButtons}>Apuestas en mercados determinados</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.buttonFees}>
                                <Text style={style.textButtons}>Apuestas cuotas determinadas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
