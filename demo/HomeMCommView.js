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
var {width}=require('Dimensions').get('window');
var Props = {};
import HomeSubPage from './HomeSubPage';
export default class HomeMCommView extends Component<Props> {
    static defaultProps = {
        title: '',
        titleColor:'',
        rightIcon:'',
        subTitle:'',
        url:'',
        nav: ''
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{this.renderCell(this.props.url)}} activeOpacity={0.5}>
            <View style={styles.container}>
                <View>
                    <Text style={[{color:this.props.titleColor},styles.fontSizeStyle]}>{this.props.title}</Text>
                    <Text style={{color:'gray'}}>{this.props.subTitle}</Text>
                </View>
                <Image style={styles.img} source={{uri:this.props.rightIcon}}/>
            </View>
            </TouchableOpacity>
        );
    }

    renderCell(url) {
        if(url.length>0){
            this.props.nav.push({
                component:HomeSubPage,
                passProps:{
                    wapUrl:url,
                    nav:this.props.nav
                }
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:width*0.5-1,
        height:59,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 1,
        marginRight: 1,
        marginLeft: 1
    },

    fontSizeStyle:{
        fontSize:15,
        fontWeight: 'bold'
    },
    img:{
        width:64,
        height:44,
        marginLeft: 10
    }
});
