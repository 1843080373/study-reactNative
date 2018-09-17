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
import HomeMCommView from './HomeMCommView';

var {width} = require('Dimensions').get('window');
var Props = {};
//引入外部数据
var centerData = require('./centerData');

export default class HomeMView extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>{this.renderRightView()}</View>
            </View>
        );
    }

    //左边
    renderLeftView() {
        var data = centerData.dataLeft;
        return (
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.4}>
                <View style={styles.leftStyle}>
                    <Image source={{uri:data.img01}} style={styles.imageStyle}/>
                    <Image source={{uri:data.img02}} style={styles.imageStyle}/>
                    <Text>{data.title}</Text>
                    <View style={{flexDirection: 'row',marginTop: 5}}>
                        <Text style={{color:'blue',marginRight: 5}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor: 'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    //右边
    renderRightView() {
        var itemArray = [];
        var rightData = centerData.dataRight;
        for (var i = 0; i < rightData.length;
             i++
        ) {
            itemArray.push(
                <HomeMCommView
                    key={i}
                    title={rightData[i].title}
                    titleColor={rightData[i].titleColor}
                    rightIcon={rightData[i].rightIcon}
                    subTitle={rightData[i].subTitle}
                />
            );
        }
        return itemArray;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row'
    },
    leftStyle: {
        width: width * 0.5,
        height: 119,
        backgroundColor: 'white',
        marginRight: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftImg: {
        width: 120,
        height: 20,
        resizeMode :'contain'
    },
    imageStyle:{
       width:140,
        height:40
    }
});



