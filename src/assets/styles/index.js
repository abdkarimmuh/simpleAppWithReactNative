import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const colorPrimary = "#ff6347";
const colorPrimaryDark = "#d0513a";
const black = "#000000";
const white = "#FFFFFF";

export default StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        margin: 16,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '100%',
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentRight: {
        marginRight: 16,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    contentLeft: {
        marginLeft: 16,
        flexDirection: 'column'
    },
    textTitle: {
        fontSize: 16,
    },
    textContent: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnStyle: {
        borderRadius: 2,
        padding: 8,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        backgroundColor: colorPrimary,
    },
    textBtnStyle: {
        textAlign: 'center',
        color: '#fff',
        paddingRight: 12,
        paddingLeft: 12,
    },
    editTextStyle: {
        marginLeft: 16,
        marginRight: 16,
        width: '100%'
    },
    left: {
        marginLeft: 14,
    }
})