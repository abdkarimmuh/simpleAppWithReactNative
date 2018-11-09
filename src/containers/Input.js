import React from 'react';
import { View } from 'react-native';
import Styles from '../assets/styles';
import Text from '../components/TextView';

export default class Input extends React.Component {
    render() {
        return (
          <View style={Styles.container}>
              <Text>Ini menu input</Text>
          </View>
        );
    }
}