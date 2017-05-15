import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import AddUserScreen from './screens/AddUserScreen';

export const UserStack = StackNavigator({
    UserScreen: {
        screen: UserScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                title: 'Profile',
                right: (
                    <Icon
                        name='settings'
                        iconStyle={{ marginRight: 10 }}
                        onPress={() => navigate('SettingScreen')}
                    />
                ),
                left: null,
            })
        }
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
            header: ({ navigate }) => ({
                title: 'SETTING',
                left: (
                    <Icon
                        name='navigate-before'
                        iconStyle={{ marginLeft: 10 }}
                        onPress={() => navigate('UserScreen')}
                    />
                ),
            })
        }
    }
});

export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
    UserStack: {
        screen: UserStack,
    },
    AddUserScreen: {
        screen: AddUserScreen,
    },
},
    {
        headerMode: 'none',
    }
);
