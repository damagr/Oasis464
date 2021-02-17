import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3e3a39',
    },
    centerCol: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    centerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    betweenRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    betweenCol: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});
