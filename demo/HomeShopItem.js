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

var Props = {};
export default class HomeShopItem extends Component<Props> {
    static defaultProps = {
        leftIcon: '',
        leftTitle:'',
        rightTitle:''
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.5}>
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image style={{width:23,height:23,marginRight:5}} source={{uri:this.props.leftIcon}}/>
                    <Text style={{fontSize:15}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                    <Image source={require('./img/arror.png')} style={{width:8,height:13,marginRight: 8,marginLeft: 5}}/>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor:'#e8e8e8'
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8
    },
    rightViewStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});
