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
    TextInput,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import App from './App';

var Dimensions = require('Dimensions');
import Register from './Register';
var {width} = Dimensions.get('window');
export default class Login extends Component {
    constructor(props) {
        super(props);
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this.state = {
            userName:'',
            password:''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*logo*/}
                <Image source={require('./img/a5.jpg')} style={styles.iconStyle}/>
                {/*输入框*/}
                <TextInput
                    placeholder="请输入用户名"
                    clearButtonMode="always"
                    underlineColorAndroid="transparent"
                    onChangeText={this._onChangeUserName}//输入框改变触发的函数
                    style={styles.inputViewStyle}
                />
                <TextInput
                    placeholder="请输入密码"
                    password={true}
                    clearButtonMode="always"
                    underlineColorAndroid="transparent"
                    onChangeText={this._onChangePassword}//输入框改变触发的函数
                    style={styles.inputViewStyle}
                    secureTextEntry={true}
                />
                {/*登录按钮*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    // 按事件(按下和抬起)
                    onPress={() => this._login()}
                    style={styles.loginBtnStyle}
                >
                    <Text style={{color: '#fff', fontSize: 18}}>登 录</Text>
                </TouchableOpacity>
                {/*默认设置*/}
                <View style={styles.defaultSettingStyle}>
                    {/*左边*/}
                    <TouchableOpacity
                        onLongPress={() => {
                            //alert('长按事件!!!');
                        }}
                    >
                        <Text>无法登录</Text>
                    </TouchableOpacity>
                    {/*右边*/}
                    <TouchableOpacity onPress={()=>{
                        this.props.navigator.push({
                            component: Register
                        });
                    }}>
                        <Text>去注册</Text>
                    </TouchableOpacity>
                </View>
                {/*默认设置*/}
                <View style={styles.bottomViewStyle}>
                    <Text>其它方式登录:</Text>
                    <TouchableOpacity onPress={() => {
                    }} activeOpacity={0.5} style={styles.bottomOCStyle}>
                        <Image source={require('./img/qq.jpg')}  style={styles.bottomImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                    }} activeOpacity={0.5} style={styles.bottomOCStyle}>
                        <Image source={require('./img/wechat.jpg')}  style={styles.bottomImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                    }} activeOpacity={0.5} style={styles.bottomOCStyle}>
                        <Image source={require('./img/weibo.jpg')}  style={styles.bottomImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                    }} activeOpacity={0.5} style={styles.bottomOCStyle}>
                        <Image source={require('./img/baidu.jpg')} style={styles.bottomImg}/>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    _onChangeUserName(inputData){
        this.setState({
           userName:inputData
        });
    }

    _onChangePassword(inputData){
        this.setState({
            password:inputData
        });
    }

    /**
     * 处理登录
     * @private
     */
    _login() {
        let REQUEST_URL = 'http://bivhfu.natappfree.cc/user/login';
        let formData = new FormData();
        formData.append("userName",this.state.userName);
        formData.append("password",this.state.password);
        var opts = {
            method:"POST",
            body:formData
        }
        fetch(REQUEST_URL,opts)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                var code=json.code;
                if('1000'==code){
                    this.props.navigator.push({
                        component: App
                    });
                }else{
                    Alert.alert(json.message);
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },

    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 80,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#fff'
    },

    inputViewStyle: {
        width: width,
        height: 36,
        backgroundColor: '#fff',
        marginBottom: 1,
        textAlign: 'center'
    },

    loginBtnStyle: {
        height: 36,
        width: width * 0.95,
        backgroundColor: '#e9232c',
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 5,

        /*主侧轴居中*/
        justifyContent: 'center',
        alignItems: 'center',
    },

    defaultSettingStyle: {
        width: width * 0.95,

        /*改变主轴的方向*/
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    bottomViewStyle: {
        position: 'absolute',
        left: 10,
        bottom: 10,

        /*改变主轴的方向*/
        flexDirection: 'row',
        alignItems: 'center'
    },

    bottomOCStyle: {
        width: 50,
        height: 50,
        marginLeft: 10
    },
    bottomImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
});
