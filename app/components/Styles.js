'use strict';

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3e3a39',
    },
    buttonLogin: {
        backgroundColor: '#232121',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        margin: 15,
        justifyContent: 'center',
    },
    textButtons: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    logo: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 50,
    },
});
