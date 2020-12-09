'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ButtonReport} from '../components/ButtonReport';
import {ReportUsersBetHeader} from '../components/ReportUsersBetHeader';
import {ReportUsersBetBody} from '../components/ReportUsersBetBody';

const style = require('../components/Styles');

export default class ReportUserBetScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.filtered}>
                    <Text style={style.textButtons}>Usuario: placemybet01</Text>
                </View>
                <ReportUsersBetHeader/>
                <ScrollView>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                    <ReportUsersBetBody/>
                </ScrollView>
                <ButtonReport/>
            </View>
        );
    }
}
