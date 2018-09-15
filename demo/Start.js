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
import Fpage from './Fpage';
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
        setInterval(()=> {
           this.props.navigator.replace({
               component:Fpage
           });
        },2000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        height:height
    }
});
