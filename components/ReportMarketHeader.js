'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const style = require('../components/Styles');

export class ReportMarketHeader extends Component {
    render() {
        return (
            <View style={style.headerReportUser}>

                <View>
                    <Text style={style.textoReportUser}> Fecha </Text>
                </View>

                <View>
                    <Text style={style.textoReportUser}> Tipo Apuesta </Text>
                </View>

                <View>
                    <Text style={style.textoReportUser}> Cuota </Text>
                </View>

                <View>
                    <Text style={style.textoReportUser}> Apuesta </Text>
                </View>

            </View>
        );
    }
}
