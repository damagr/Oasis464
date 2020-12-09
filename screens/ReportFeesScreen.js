'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ReportFeesBody} from '../components/ReportFeesBody';
import {ButtonReport} from '../components/ButtonReport';
import {ReportFeesHeader} from '../components/ReportFeesHeader';

const style = require('../components/Styles');

export default class ReportFeesScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.filteredMarket}>
                    <Text style={style.textButtons}>Cuota Inicio: 1.1</Text>
                    <Text style={style.textButtons}>Cuota Fin: 3.9</Text>
                </View>
                <ReportFeesHeader/>
                <ScrollView>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                    <ReportFeesBody/>
                </ScrollView>
                <ButtonReport/>
            </View>
        );
    }
}
