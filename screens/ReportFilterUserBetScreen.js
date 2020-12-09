'use strict';

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Input} from 'react-native-elements';
import {ButtonFilter} from '../components/ButtonFilter';

const style = require('../components/Styles');

export default class ReportFilterUserBetScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <View style={style.inputPosition}>

                        <Logo/>

                        <View style={{flex: 0, flexDirection: 'row'}}>

                            <View style={{flex: 1}}>

                                <View style={{flex: 1, justifyContent: 'center', margin: 15}}>
                                    <Input style={style.inputFeatures} placeholder='Fecha Inicio'/>
                                </View>

                            </View>

                            <View style={{flex: 1}}>

                                <View style={{flex: 1, justifyContent: 'center', margin: 15}}>
                                    <Input style={style.inputFeatures} placeholder='Fecha Fin'/>
                                </View>

                            </View>

                        </View>

                        <View style={{flex: 0, flexDirection: 'row'}}>

                            <View style={{flex: 1, justifyContent: 'center', margin: 15}}>
                                <Input style={style.inputFeatures} placeholder='placemybet01'/>
                            </View>

                        </View>

                    </View>
                </ScrollView>
                <ButtonFilter/>
            </View>
        );
    }
}
