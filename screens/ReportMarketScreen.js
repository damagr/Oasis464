'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ReportMarketBody} from '../components/ReportMarketBody';
import {ButtonReport} from '../components/ButtonReport';
import {ReportMarketHeader} from '../components/ReportMarketHeader';

const style = require('../components/Styles');

export default class ReportMarketScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.filtered}>
                    <Text style={style.textButtons}>Mercado: 1.5</Text>
                </View>
                <ReportMarketHeader/>
                <ScrollView>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                    <ReportMarketBody/>
                </ScrollView>
                <ButtonReport/>
            </View>
        );
    }
}
