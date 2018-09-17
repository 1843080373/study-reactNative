/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Props = {};
export default class HomeShopImage extends Component<Props> {
    static defaultProps = {
        shopImage: '',
        shopSale: '',
        shopName: '',
        detailUrl:'',
        popToShopCenter:null
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() =>
                this.clickItem(this.props.detailUrl,this.props.shopSale)
            } activeOpacity={0.5}>
                <View style={styles.container}>
                    <Image style={styles.imgS} source={{uri: this.props.shopImage}}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    clickItem(url,shopSale){
        if(this.props.detailUrl==null){
            return;
        }else{
            //执行回调函数
            this.props.popToShopCenter(url,shopSale);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    imgS: {
        height: 80,
        width: 120,
        borderRadius: 8
    },
    shopSaleStyle: {
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor: 'red',
        color: 'white',
        padding: 2,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    shopNameStyle:{
        textAlign: 'center',
        marginTop: 5

    }
});
