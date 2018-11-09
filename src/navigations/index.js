import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ReadScreen from '../containers/read';
import InputScreen from '../containers/input';
  
const Navigation = createStackNavigator({
    Read: { screen: ReadScreen },
    Input: { screen: InputScreen },
});
  
export default Navigation;