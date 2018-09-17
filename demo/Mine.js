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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import MineItem from './MineItem';
import MineMiddle from './MineMiddle';

var {width} = require('Dimensions').get('window');
var Props;
Props = {};
// noinspection JSAnnotator
export default class Mine extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scView}
            >
                {/*导航条*/}
                {this.renderNavBar()}
                <View style={styles.myTop}>

                    <Image style={styles.myTopImg} source={require('./img/a1.jpg')}/>
                    <Text style={styles.myTopText}>拼多多</Text>
                    {this.renderMiddle()}
                </View>

                <View style={{marginTop: 20}}>
                    <MineItem
                        leftIconName='mm03'
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'
                    />
                </View>
                <MineMiddle/>
                <View style={{marginTop: 20}}>
                    <MineItem
                        leftIconName='mm01'
                        leftTitle='我的余额'
                        rightTitle='¥120'
                    />
                </View>
                <View style={{marginTop: 2}}>
                    <MineItem
                        leftIconName='mm02'
                        leftTitle='积分商城'
                        rightTitle='1200'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MineItem
                        leftIconName='mm03'
                        leftTitle='我的资料'
                        rightTitle='蓝精灵'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MineItem
                        leftIconName='my03'
                        leftTitle='我的收藏'
                        rightIconName='news'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MineItem
                        leftIconName='home13'
                        leftTitle='银行卡'
                        rightTitle='中国农业银行'
                    />
                </View>
            </ScrollView>
        );
    }

    renderMiddle() {
        return (
            <View style={styles.buttonViewStyle}>
                {this.renderBottom()}
            </View>
        )
    }

    renderBottom() {
        var itemArray = [];
        var data = [{
            'number': 100,
            'title': '红包'
        }, {
            'number': 30,
            'title': '评价'
        }, {
            'number': 50,
            'title': '收藏'
        }];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            itemArray.push(
                <TouchableOpacity key={i} activeOpacity={0.4} onPress={() => {
                }}>
                    <View style={styles.item}>
                        <Text style={{color: 'white'}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArray;
    }

    renderNavBar() {
        return (
            <View style={styles.autoViewStyle}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20}}>个人中心</Text>
                <TouchableOpacity onPress={() => {
                    alert(1)
                }} style={styles.ocStyle}>

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
    scView: {
        backgroundColor: '#F5FCFF',
    },
    myTop: {
        flexDirection: 'row',
        height: 130,
        alignItems: 'center',
        backgroundColor: 'rgba(255,96,0,1.0)',
    },
    myTopImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 20
    },
    myTopText: {
        fontSize: 15,
        color: 'white',
        marginLeft: 10
    },
    buttonViewStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    item: {
        width: (width / 3) + 1,
        height: 40,
        backgroundColor: 'rgba(255,244,245,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white'
    },

    ocStyle: {
        //绝对定位
        position: 'absolute',
        right: 10,
        bottom: 30
    },
    autoViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 40,
        width: width,
        justifyContent: 'center'
    }
});
