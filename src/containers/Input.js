import React from 'react';
import { ToastAndroid, View } from 'react-native';
import Styles from '../assets/styles';
import Text from '../components/TextView';
import EditText from '../components/EditText';
import Button from '../components/Button';
import Api from '../services/api';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            nama_barang: "",
            jumlah: ""
        }
    }

    postData = async () => {
        const { nama_barang, jumlah } = this.state;
        Api.create()
        .postData(nama_barang, jumlah)
        .then(res => {
          if(res.status === 200) {
            this.resetContent();
            ToastAndroid.show(`Success`,ToastAndroid.SHORT);
          } else {
            ToastAndroid.show(`Error`,ToastAndroid.SHORT);
          }
        })
        .catch(err => {
          console.log('ERR', err)
        })
    }

    resetContent = () => {
        this.setState({ nama_barang: "" });
        this.setState({ jumlah: "" });
        this.props.navigation.navigate('List');
    }

    render() {
        return (
            <View style = { Styles.container }>
                <View style = { Styles.inputContainer }>
                    <Text style = {[ Styles.textContent, Styles.left ]}> Nama Barang </Text>
                    <EditText placeholder = "Input Nama Barang"
                        value = { this.state['nama_barang'] }
                        onChangeText = { (value) => this.setState({['nama_barang']:value}) }/>
                </View>
                <View style = { Styles.inputContainer }>
                    <Text style = {[ Styles.textContent, Styles.left ]}> Jumlah </Text>
                    <EditText placeholder = "Input Jumlah"
                        value = { this.state['jumlah'] }
                        onChangeText = { (value) => this.setState({['jumlah']:value}) }
                        keyboardType = { 'number-pad' }
                    />
                </View>
                <Button btnStyle = { Styles.btnStyle } 
                    textStyle = { Styles.textBtnStyle } 
                    onPress = { this.postData }> Kirim </Button>
            </View>
        );
    }
}