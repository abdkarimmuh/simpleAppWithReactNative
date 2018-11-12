import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import Styles from '../assets/styles';
import Text from '../components/TextView';
import { Card } from 'react-native-elements';
import Mock from '../services/mock'
import Api from '../services/api'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data: [],
            error: false
        }
    }

    componentDidMount(){
        this.getData();
        // this.getDataMock();
    }

    getData = async() => {
        Api.create()
        .getData()
        .then(res => {
            this.setState({ data: res.data.data })
        })
        .catch(err => {
            console.log('ERR', err)
            this.setState({
                error: true
            })
        })
    }


    getDataMock(){
        Mock.create()
        .getData()
        .then(res => {
            this.setState({ data: res.data })
        })
        .catch(err => {
            console.log('ERR', err)
            this.setState({
                error: true
            })
        })
    }

    render() {
        const { data } = this.state;
        this.componentDidMount();
        return (
            <ScrollView style = {{ paddingTop: 16 }}>
                <View style = { Styles.container }>
                    {
                        data.map((d, index) => (
                            <View style = { Styles.contentContainer }
                                key = { index }>
                                <View style = { Styles.contentLeft }>
                                    <Text style = { Styles.textTitle }> Nama Barang </Text>
                                    <Text style = { Styles.textContent }> { d.nama_barang } </Text>
                                </View>
                                <View style = { Styles.contentRight }>
                                    <Text style = { Styles.textTitle }> Jumlah </Text>
                                    <Text style = { Styles.textContent }> { d.jumlah } </Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                <View style = {{width: '100%', height: 64}}></View>
            </ScrollView>
        );
    }
}