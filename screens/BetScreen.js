'use strict';

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Logo} from '../components/Logo';
import {BetEvent} from '../components/BetEvent';
import {CheckBox, Input} from 'react-native-elements';
import {ButtonBet} from '../components/ButtonBet';

const style = require('../components/Styles');

export default class BetScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <ScrollView>

                    <Logo/>

                    <View style={style.inputPosition}>

                        <BetEvent/>

                        <View style={{flexDirection: 'row'}}>

                            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                                <View>
                                    <CheckBox title='Over' checked='true' checkedIcon='dot-circle-o'
                                              uncheckedIcon='circle-o'/>
                                </View>
                                <View>
                                    <CheckBox title='Under' checked='false' checkedIcon='dot-circle-o'
                                              uncheckedIcon='circle-o'/>
                                </View>
                            </View>

                            <View style={{flex: 1}}>

                                <View style={{flex: 1, justifyContent: 'center', margin: 15}}>
                                    <Input style={style.inputFeatures} placeholder='50.15€'/>
                                </View>

                            </View>

                        </View>
                    </View>
                </ScrollView>
                <ButtonBet/>
            </View>
        );
    }
}
