import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogginScreen } from '../screens/LoginScreen';

const stack = createStackNavigator();

// This is the component used to create the stack navigation, here we have all our screens imported and asigned them
// a certain name, like the .js
export default class ONavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen name='LogginScreen' component={LogginScreen} />
                </stack.Navigator>
            </NavigationContainer>
        );
    }
}