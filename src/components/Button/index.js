import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props =>(
    <TouchableOpacity onPress={props.onPress} style={props.btnStyle}>
        <Text style={props.textStyle}>{props.children}</Text>
    </TouchableOpacity>
)

export default Button;