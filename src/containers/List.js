import React from 'react';
import { View, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
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
        // this.getData();
        this.getDataMock();
    }

    getData = async() => {
        Api.create()
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


    getDataMock(){
        Mock.create()
        .getData()
        .then(res => {
            this.setState({ data: res.data})
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
        return (
            <ScrollView style = {{ paddingTop: 32 }}>
                <View style = { Styles.container }>
                    {
                        data.map((d, index) => (
                            <View style = { styles.contentContainer }
                                key = { index }>
                                <View style = { styles.contentLeft }>
                                    <Text style = { styles.textTitle }> Nama Barang </Text>
                                    <Text style = { styles.textContent }> { d.nama_barang } </Text>
                                </View>
                                <View style = { styles.contentRight }>
                                    <Text style = { styles.textTitle }> Jumlah </Text>
                                    <Text style = { styles.textContent }> { d.jumlah } </Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
})