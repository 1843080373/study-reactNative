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
                        <ShopItem title='我的地址' isSwitch={true}/>
                    </View>
                    <ShopItem title='我的地址' />
                    <ShopItem title='我的地址' />
                    <ShopItem title='我的地址' />


                    <View style={{marginTop: 20}} >
                        <ShopItem title='我的地址' isSwitch={true}/>
                    </View>
                    <ShopItem title='我的地址' />
                    <ShopItem title='我的地址' />
                    <ShopItem title='我的地址' />
                    <ShopItem title='我的地址' />

                    <View style={{marginTop: 20}} >
                        <ShopItem title='扫一扫'/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.autoViewStyle}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20}}>更多</Text>
                <TouchableOpacity onPress={() => {
                    alert(1)
                }} style={styles.ocStyle}>
                    <Image source={require('./img/setting.png')} style={styles.imgStyle}/>
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
