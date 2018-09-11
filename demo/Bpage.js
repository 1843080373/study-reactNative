/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
    Text
} from 'react-native';
export default class Bpage extends Component{
  constructor(props) {
        super(props);
        this.state={
                name:'张三'
        }
    }
  render() {
    return (
      <View style={styles.container}>
          {/*这里是注释语句*/}
          {/*flex站位比例*/}
          <Text style={{backgroundColor: 'red',flex:1,height:30,alignSelf: 'flex-start'}}>我是里面的View</Text>
          <Text style={{backgroundColor: 'green', flex:1,height:40, alignSelf:'flex-end'}}>我是里面的View</Text>
          <Text style={{backgroundColor: 'yellow',flex:1,height:50}}>我是里面的View</Text>
          <Text style={{backgroundColor: 'blue', flex:1,height:60}}>我是里面的View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'purple',
      //改变主轴的方向
      flexDirection: 'row',
      //设置主轴的对齐方式
      justifyContent: 'flex-start',
      //设置侧轴的对齐方式
      alignItems: 'center',
      //显示不下，则换一行
      flexWrap: 'wrap'
  }
});
