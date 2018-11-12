import React from 'react';
import { TextInput } from 'react-native';
import Styles from '../../assets/styles'

const EditText = props =>(

    <TextInput
        style = { Styles.editTextStyle }
        underlineColorAndroid = "transparent"
        onChangeText = { props.onChangeText }
        placeholder = { props.placeholder }
        placeholderTextColor = '#7f8c8d'
        value = { props.value }
        keyboardType = { props.keyboardType || 'default' }
    />
)

export default EditText;