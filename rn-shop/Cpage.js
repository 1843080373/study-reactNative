/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

var Dimensions = require('Dimensions');
export default class Cpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '张三'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*这里是注释语句*/}
                {/*flex站位比例*/}
                <Text>当前屏幕的高度：{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        //设置主轴的对齐方式
        justifyContent: 'center',
        //设置侧轴的对齐方式
        alignItems: 'center',
        flex: 1
    }
});
