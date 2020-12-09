'use strict';

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const style = require('../components/Styles');

export class BetEvent extends Component {
    render() {
        return (
            <View style={style.betSection}>
                <View style={{marginRight: 20}}>
                    <Image source={require('../assets/Barcelona.png')}/>
                </View>

                <View style={{alignItems: "center"}}>
                    <Text style={style.textSections}>Encuentro: {'01-01-21'}</Text>
                    <Text style={style.textSections}>Cuota Over: {'1.9'}</Text>
                    <Text style={style.textSections}>Cuota Under: {'1.9'}</Text>
                </View>

                <View style={{marginLeft: 17}}>
                    <Image source={require('../assets/RealMadrid.png')}/>
                </View>
            </View>
        );
    }
}
