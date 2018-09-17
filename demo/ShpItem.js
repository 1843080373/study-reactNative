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
    Switch,
    Image,
    Platform
} from 'react-native';

var Props;
Props = {};
// noinspection JSAnnotator
export default class ShopItem extends Component<Props> {
    static defaultProps = {
        title: '',
        isSwitch: false,
        val:false
    }

    constructor(props) {
        super(props);
        this.state = {
            on: false
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                alert(1)
            }}>
                <View style={styles.container}>
                    <Text style={{marginLeft: 8}}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return <Switch value={this.state.on == true} style={{marginRight: 8}}
                           value={this.state.val}
                           onValueChange={() => {
                               this.setState({
                                   on: !this.state.on,
                                   val: !this.state.val
                               })
                           }}
            />
        } else {
            return <Image source={require('./img/arror.png')} style={{width: 8, height: 10, marginRight: 8}}/>
        }
    }
}


const styles = StyleSheet.create({
    container:{
        height: 40,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});


