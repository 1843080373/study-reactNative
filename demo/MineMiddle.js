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
import MineMiddleInner from './MineMiddleInner';

var allData = require('./middle.json');
var Props = {};
export default class MineMiddle extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem() {
        var all = [];
        for (var i = 0; i < allData.data.length; i++) {
            var item = allData.data[i];
            all.push(
                <MineMiddleInner key={i} icon={item.icon} title={item.title}/>
            );
        }
        return all;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
