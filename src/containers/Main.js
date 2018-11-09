import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import ListScreen from './List';
import InputScreen from './Input';

export default createBottomTabNavigator(
    {
        List: ListScreen,
        Input: InputScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                
                if (routeName === 'List') {
                    iconName = `ios-list${focused ? '' : '-box'}`;
                } else if (routeName === 'Input') {
                    iconName = `ios-add-circle${focused ? '' : '-outline'}`;
                } 
                
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
    
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);