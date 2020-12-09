'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Logo} from '../components/Logo';

const style = require('../components/Styles');

export default class ReportFilterMarketScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <View>
                        <Logo/>
                    </View>

                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity style={style.buttonFees}>
                            <Text style={style.textButtons}>Mercado 1.5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.buttonFees}>
                            <Text style={style.textButtons}>Mercado 2.5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.buttonFees}>
                            <Text style={style.textButtons}>Mercado 3.5</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
