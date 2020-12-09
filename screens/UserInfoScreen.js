'use strict';

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LogoWithLogOut} from '../components/LogoWithLogOut';
import {ButtonsUserInfo} from '../components/ButtonsUserInfo';
import {Input} from 'react-native-elements';
import {ModifyButton} from '../components/ButtonModify';

const style = require('../components/Styles');

export default class UserInfoScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>

                    <LogoWithLogOut/>

                    <View style={style.inputPosition}>

                        <Input style={style.inputFeatures} placeholder="mockup@placemybet.es"/>
                        <Input style={style.inputFeatures} placeholder="********************"/>
                        <Input style={style.inputFeatures} placeholder="Nombre Usuario"/>
                        <Input style={style.inputFeatures} placeholder="Apellidos Usuario"/>
                        <Input style={style.inputFeatures} placeholder="Fecha de nacimiento"/>

                        <ModifyButton/>

                    </View>

                </ScrollView>
                <ButtonsUserInfo/>
            </View>
        );
    }
}
