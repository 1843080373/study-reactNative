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
    ScrollView
} from 'react-native';
import MineItem from './MineItem';
import MineMiddle from './MineMiddle';

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
                        leftIconName='mm04'
                        leftTitle='我的收藏'
                        leftTitle='我的资料'
                        rightIconName='xxx'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <MineItem
                        leftIconName='mm01'
                        leftTitle='存管账户'
                        rightTitle='新网银行'
                    />
                </View>
            </ScrollView>
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
    }
});
