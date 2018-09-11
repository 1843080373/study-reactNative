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
var Props;
Props = {};
// noinspection JSAnnotator
export default class MovieList extends Component<Props> {
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
          这是电影列表
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
