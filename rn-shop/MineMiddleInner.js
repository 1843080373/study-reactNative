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
export default class MineMiddleInner extends Component<Props> {

    static defaultProps = {
        icon: '',
        title: ''
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
            }} activeOpacity={0.5} style={styles.container}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{uri: this.props.icon}}/>
                    <Text style={{marginTop: 9}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: 65,
        marginTop: 10
    },
    img: {
        width: 20,
        height: 20
    }
});
