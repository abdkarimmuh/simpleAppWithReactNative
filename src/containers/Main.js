import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import InputScreen from './Input';
import ListScreen from './List';

export default createBottomTabNavigator(
  {
    Input: InputScreen,
    List: ListScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Input') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'List') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
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