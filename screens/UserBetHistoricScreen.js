'use strict';

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {CreateEventSection} from '../components/CreateEventSection';
import {ButtonsSports} from '../components/ButtonsSports';
import {ButtonMainScreen} from '../components/ButtonMainScreen';

const style = require('../components/Styles');

export default class UserBetHistoricScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <CreateEventSection/>
                    <CreateEventSection/>
                    <CreateEventSection/>
                    <CreateEventSection/>
                    <CreateEventSection/>
                    <CreateEventSection/>
                </ScrollView>
                <ButtonsSports/>
                <ButtonMainScreen/>
            </View>
        );
    }
}
