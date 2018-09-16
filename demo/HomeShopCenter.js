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
    ScrollView
} from 'react-native';
import HomeShopItem from './HomeShopItem';
import HomeShopImage from './HomeShopImage';

var dataShops = require('./homeD5');
var Props = {};
export default class HomeShopCenter extends Component<Props> {
    static defaultProps = {
        popToHome: null
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <HomeShopItem
                    leftIcon={'home08'}
                    leftTitle={'购物中心'}
                    rightTitle={dataShops.tips}/>
                {/*下部分*/}
                <ScrollView style={styles.scrollStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }

    renderAllItem() {
        var itemArray = [];
        var data = dataShops.dataImgs;
        for (var i = 0;
             i < data.length;
             i++
        ) {
            itemArray.push(
                <HomeShopImage key={i}
                               shopImage={data[i].shopImage}
                               shopSale={data[i].shopSale}
                               shopName={data[i].shopName}
                               detailUrl={data[i].url}
                               popToShopCenter={(url) => this.popToHomeView(url)}
                />
            );
        }
        return itemArray;
    }

    popToHomeView(url) {
        if (this.props.popToHome == null) {
            return;
        } else {
            //执行回调函数
            this.props.popToHome(url);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8'
    },
    scrollStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10
    }
});
