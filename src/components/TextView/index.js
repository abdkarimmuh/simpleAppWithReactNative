import React from 'react';
import { Text } from 'react-native';
import Style from '../../assets/styles';

const TextView = props =>(
    <Text style={Style.textViewStyle}>
        {props.children}
    </Text>
)

export default TextView;