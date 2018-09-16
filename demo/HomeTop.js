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
} from 'react-native';
var {width,height}=require('Dimensions').get('window');
import HomeTopList from './HomeTopList';
var allData = require('./homeIcons.json');
var Props = {};
export default class HomeTop extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
          selectIn:0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*内容*/}
                <ScrollView
                 horizontal={true}
                 pagingEnabled={true}
                 showsHorizontalScrollIndicator={false}
                 onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码*/}
                <View style={styles.indicateStyle}>
                    {this.renderIndicate()}
                </View>
            </View>
        );
    }

    renderScrollItem(){
        var itemArray=[];
        var dataArray=allData.data;
        for(var i=0;i<dataArray.length;i++){
            itemArray.push(<HomeTopList key={i} dataArr={allData.data[i]}/>)
        }
        return itemArray;
    }

    renderIndicate(){
        var itemArray=[];
        var dataArray=[1,2];
        var style;
        for(var i=0;i<dataArray.length;i++){
            style=(i === this.state.selectIn?{color:'orange'}:{color:'gray'});
            itemArray.push(
                <Text key={i} style={[{fontSize:25},style]}>
                    &bull;
                </Text>
            );
        }
        return itemArray;
    }
    //当一帧滚动结束时候来调用
    onScrollAnimationEnd(e) {
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
       // alert(currentPage);
        //this.setState({selectIn: currentPage});
    }
}

const styles = StyleSheet.create({
    container: {
backgroundColor: 'white'
    },

    indicateStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
