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

var Props;
Props = {};

export default class MineItem extends Component<Props> {

    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconName: '',
        rightTitle: ''
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
            }}>
                <View style={styles.container}>
                    <View style={styles.leftView}>
                        <Image style={styles.leftImg} source={{uri: this.props.leftIconName}}/>
                        <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightView}>
                        {this.renderRight()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderRight() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.renderRightContent()}
                <Image style={{width:13,height:13,marginRight: 5,marginLeft: 5}} source={require('./img/arror.png')}
                />
            </View>
        )
    }

//右边具体返回的值
    renderRightContent() {
        if (this.props.rightIconName.length == 0) {
            //不是图片
            return <Text style={styles.rightText}>{this.props.rightTitle}</Text>
        } else {
            return <Image source={{uri:this.props.rightIconName}}
                          style={{width: 24, height: 13}}
            />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:40
    },
    leftView: {

        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    rightView: {},
    leftImg: {
        width: 24,
        height: 24,
        marginRight: 6,
        borderRadius:12
    },
    leftTitle: {
       fontSize:16
    }
});
