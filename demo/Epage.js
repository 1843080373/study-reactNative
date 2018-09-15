/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

var allData = require('./data.json');
var Dimensions = require('Dimensions');
export default class Epage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'red'}}>你好世界:</Text>
                <TextInput style={styles.inputStyle}
                    //value={'wo'}
                    //keyboardType={'number-pad'}
                    //multiline={true}
                    //password={true}
                           placeholder={'我是站位文字'}
                           clearButtonMode={'always'}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputStyle: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: 'green'
    }
});
