'use strict';

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {CreateEventSection} from '../components/CreateEventSection';
import {ButtonsSports} from '../components/ButtonsSports';

const style = require('../components/Styles');

export default class MainScreen extends Component {
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
            </View>
        );
    }
}
