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
export default class Apage extends Component{
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
          <Text style={{backgroundColor: 'red',width:50,height:30}}>我是里面的View</Text>
          <Text style={{backgroundColor: 'green',width:70,height:40}}>我是里面的View</Text>
          <Text style={{backgroundColor: 'yellow',width:90,height:50}}>我是里面的View</Text>
          <Text style={{backgroundColor: 'blue',width:100,height:60}}>我是里面的View</Text>
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
      justifyContent: 'space-around',
      //设置侧轴的对齐方式
      alignItems: 'center'
  }
});
