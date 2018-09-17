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
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';
import ShopItem from './ShpItem';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Props;
Props = {};
// noinspection JSAnnotator
export default class Shop extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 20}} >
                        <ShopItem title='扫一扫'/>
                    </View>
                    <View style={{marginTop: 20}} >
                        <ShopItem title='我的地址' isSwitch={true} />
                    </View>
                    <ShopItem title='我的卡券' />
                    <ShopItem title='积分' />
                    <ShopItem title='我的收藏' />

                    <View style={{marginTop: 20}} >
                        <ShopItem title='好评榜' isSwitch={true} />
                    </View>
                    <ShopItem title='物流' />
                    <ShopItem title='商城' />
                    <ShopItem title='拍品' />
                    <ShopItem title='售后' />

                    <View style={{marginTop: 20}} >
                        <ShopItem title='做福利'/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.autoViewStyle}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20}}>账号</Text>
                <TouchableOpacity onPress={() => {

                }} style={styles.ocStyle}>
                    <Image source={require('./img/logout.png')} style={styles.imgStyle}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imgStyle: {
        width: 28,
        height: 28,
        marginLeft: 4,
    },
    ocStyle: {
        //绝对定位
        position: 'absolute',
        right: 10,
        bottom: 17
    },
    autoViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 64,
        width: width,
        justifyContent: 'center'
    }
});
