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
    TouchableOpacity,
    WebView, Image
} from 'react-native';
import Home from './Home'
var {width}=require('Dimensions').get('window');
var Props;
Props = {};
export default class HomeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.wapUrl,
            shopSale: this.props.shopSale
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <WebView
                    ref={'webView'}
                    style={{
                        width: width,
                        alignItems: 'center',
                        paddingRight:10
                    }}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                />

            </View>
        );
    }


    renderNavBar() {
        return (
            <View style={styles.autoViewStyle}>
                <TouchableOpacity onPress={() => {
                    this.props.navigator.push({
                        component: Home
                    });
                }}>
                    <Image source={require('./img/back.png')} style={styles.imgStyle1}/>
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20}}>{this.state.shopSale}</Text>
                <TouchableOpacity onPress={() => {
                    //alert(1)
                }} style={styles.ocStyle}>
                    <Image source={require('./img/setting.png')} style={styles.imgStyle}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    imgStyle: {
        width: 28,
        height: 28,
        marginLeft: 4,
    },
    imgStyle1: {
        //绝对定位
        width: 20,
        height: 20,
        marginLeft: 4
    },
    autoViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 64,
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
