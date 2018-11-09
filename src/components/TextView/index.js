import React from 'react';
import { Text } from 'react-native';
import Styles from '../../assets/styles';

const TextView = props =>(
    <Text style={props.style}>
        {props.children}
    </Text>
)

export default TextView;