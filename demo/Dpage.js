/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
var allData= require('./data.json');
var Dimensions=require('Dimensions');
var width=Dimensions.get('window').width;
var iWidth=100;
var paddingW=(width-3*iWidth)/4;
var hMargging=25;
export default class Dpage extends Component{
  constructor(props) {
        super(props);
        this.state={

        }
    }

  render() {
    return (
      <View style={styles.container}>
          {/*返回的数据函数*/}
          {this.rendAllData()}
      </View>
    );
  }

    /**
     * 返回6个风景对象
     */
    rendAllData(){
        //定义数组，装所有的组件
      var allImages=[];
      for(var i=0;i<allData.data.length;i++){
          var item=allData.data[i];
          //var imgUrl=require('./img/a2.jpg');
          allImages.push(<View key={i} style={styles.item}>
              <Image source={{uri:item.icon}} style={styles.imgStyle}/>
              <Text style={styles.title}>{item.name}</Text>
          </View>);
      }
      return allImages;
    }
}

const styles = StyleSheet.create({
  container: {
      //flex:1,
      flexDirection: 'row',
      //显示不下，则换一行
      flexWrap: 'wrap'
  },
    item:{
        backgroundColor:'white',
        alignItems: 'center',
        height: iWidth,
        width:iWidth,
        marginLeft: paddingW,
        marginTop: hMargging
    },
    imgStyle:{
      width:80,
        height:60,
        marginBottom: 5
    },
    title:{

    }
});
