'use strict';

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Input} from 'react-native-elements';
import {ButtonMainScreen} from '../components/ButtonMainScreen';
import {ModifyButton} from '../components/ButtonModify';

const style = require('../components/Styles');

export default class UserBankScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>

                    <Logo style={style.logo}/>

                    <View style={style.inputPosition}>

                        <Input style={style.inputFeatures} placeholder="Tarjeta de crédito"/>
                        <Input style={style.inputFeatures} placeholder="Nombre del banco"/>
                        <Input style={style.inputFeatures} placeholder="Saldo €"/>

                        <ModifyButton/>

                    </View>

                </ScrollView>
                <ButtonMainScreen/>
            </View>
        );
    }
}
