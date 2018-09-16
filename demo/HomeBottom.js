/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View} from 'react-native';
//引入外部数据
var buttomData = require('./bottomData');
var Props = {};
import HomeMCommView from './HomeMCommView';
export default class HomeBottom extends Component<Props> {
    static defaultProps = {
        nav: ''
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topView}>

                </View>
                {/*下部*/}
                <View style={styles.bottomView}>
                    {this.rendData(this.props.nav)}
                </View>
            </View>
        );
    }
    rendData(nav){
      var itemArray=[];
      var data=buttomData.data;
      for(var i=0;i<data.length;i++){
          //创建组件，装入数组
          itemArray.push(
              <HomeMCommView
              key={i}
              title={data[i].title}
              titleColor={data[i].titleColor}
              rightIcon={data[i].rightIcon}
              subTitle={data[i].subTitle}
              url={data[i].url}
              nav={nav}
              />
          );
      }
      return itemArray;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
       // height:80
    },
    topView: {

    },
    bottomView:{
      flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
