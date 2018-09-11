/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
var Props = {};
export default class USBox extends Component<Props> {
  constructor(props) {
        super(props);
        this.state={
            selectedTab:'home',
        }
    } 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          这是我的页面
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
