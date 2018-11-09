import React from 'react';
import { TextInput } from 'react-native';
import Style from '../../assets/styles'

const EditText = props =>(
    <TextInput
        style={Style.editTextStyle}
        name={props.name}
        underlineColorAndroid="transparent"
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={Style.placeholderColor}
        value={props.value}
        keyboardType={props.keyboardType || 'default'}
    />
)

export default EditText;