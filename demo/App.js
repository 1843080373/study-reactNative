/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import USBox from './USBox';
import MovieList from './MovieList';
import TabNavigator from 'react-native-tab-navigator';
const TAB_NORMAL_1=require('./img/a.jpg');
const TAB_PRESS_1 =require('./img/a.jpg');
const TAB_NORMAL_2=require('./img/b.jpg');
const TAB_PRESS_2=require('./img/b.jpg');
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
        super(props);
        this.state={
            selectedTab:'home',
        }
    } 
  render() {
    return (
      <View style={styles.container}>
         <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title="Home"
                            renderIcon={() => <Image source={TAB_NORMAL_1} style ={styles.icon} />}
                            renderSelectedIcon={() => <Image source={TAB_PRESS_1} style ={styles.icon}  />}
                            badgeText="1"
                            onPress={() => this.setState({ selectedTab: 'home' })}>
                            <MovieList />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'profile'}
                            title="Profile"
                            renderIcon={() => <Image source={TAB_NORMAL_2} style ={styles.icon} />}
                            renderSelectedIcon={() => <Image source={TAB_PRESS_2} style ={styles.icon} />}
                            onPress={() => this.setState({ selectedTab: 'profile' })}>
                            <USBox />
                        </TabNavigator.Item>
          </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  icon: {
    width:20,
    height:20
  }
});
