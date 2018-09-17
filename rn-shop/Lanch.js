/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

import Start from './Start';
import {Navigator} from "react-native-deprecated-custom-components";

var Props;
Props = {};
// noinspection JSAnnotator
export default class Lanch extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: '启动页', component: Start}}
                configureScene={this.configureScene}
                renderScene={(route, navigator) => <route.component
                    navigator={navigator} {...route.passProps} />}/>
        );
    }
}

const styles = StyleSheet.create({

});
