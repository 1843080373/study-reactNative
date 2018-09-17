/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
const start = require('./img/start.jpg');
import Login from './Login';
var {width,height}=require('Dimensions').get('window');
var Props;
Props = {};
// noinspection JSAnnotator
export default class Start extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Image style={styles.container} source={start}/>
        );
    }

    componentDidMount() {
        setTimeout(()=> {
           this.props.navigator.replace({
               component:Login
           });
        },1000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        height:height
    }
});
