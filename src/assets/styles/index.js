import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const colorPrimary = "#ff6347";
const colorPrimaryDark = "#d0513a";
const black = "#000000";
const white = "#FFFFFF";
const grey = "#7f8c8d";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStyle: {

    },
    editTextStyle: {

    },
    placeholderColor: {
        color: grey
    },
    textViewStyle: {

    },
})