'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';

const style = require('../components/Styles');

export class ReportUsersBetBody extends Component {
    render() {
        return (
            <View style={style.headerReportUser}>

                <View>
                    <Text style={style.textoReportUser}> 01/01/21 </Text>
                </View>

                <View>
                    <Text style={style.textoReportUser}> Over </Text>
                </View>

                <View>
                    <Text style={style.textoReportUser}> 1.9 </Text>
                </View>

                <View>
                    <Text style={style.textoReportUser}> 250 </Text>
                </View>

            </View>
        );
    }
}
