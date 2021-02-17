import React, {Component} from 'react';
import {View} from 'react-native';
import {OButton} from '../components/OButton';
import {style} from '../components/OConstants';
import {OLogo} from '../components/OLogo';

export default class LoggingScreen extends Component {
    render() {
        return (
            <>
                <View style={style.container}>
                    <OLogo/>
                    <OButton text={'Admin'}/>
                    <OButton text={'Invitado'}/>
                </View>
            </>
        );
    }
}
