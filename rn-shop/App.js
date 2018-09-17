/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import Member from './Gpage';
import Home from './Home';
import Mine from './Mine';
import Shop from './Shop';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';

const TAB_NORMAL_1 = require('./img/h02.png');
const TAB_PRESS_1 = require('./img/h02.png');
const TAB_NORMAL_2 = require('./img/fac02.png');
const TAB_PRESS_2 = require('./img/fac02.png');
const TAB_NORMAL_3 = require('./img/user02.png');
const TAB_PRESS_3 = require('./img/user02.png');
const TAB_NORMAL_4 = require('./img/message02.png');
const TAB_PRESS_4 = require('./img/message02.png');
var Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    style={{backgroundColor: 'rgba(255,96,0,1.0)'}}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={() => <Image source={TAB_NORMAL_1} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_1} style={styles.icon}/>}
                        //badgeText="1"
                        selectedTitleStyle={{color: 'red'}}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <Navigator
                            initialRoute={{name: '首页', component: Home}}
                            configureScene={this.configureScene}
                            renderScene={(route, navigator) => <route.component
                                navigator={navigator} {...route.passProps} />}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="商户"
                        renderIcon={() => <Image source={TAB_NORMAL_2} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_2} style={styles.icon}/>}
                        selectedTitleStyle={{color: 'red'}}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <Navigator
                            initialRoute={{name: '商品', component: Member}}
                            configureScene={this.configureScene}
                            renderScene={(route, navigator) => <route.component
                                navigator={navigator} {...route.passProps} />}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        title="我的"
                        renderIcon={() => <Image source={TAB_NORMAL_3} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_3} style={styles.icon}/>}
                        selectedTitleStyle={{color: 'red'}}
                        onPress={() => this.setState({selectedTab: 'mine'})}>
                        <Navigator
                            initialRoute={{name: '我的', component: Mine}}
                            configureScene={this.configureScene}
                            renderScene={(route, navigator) => <route.component
                                navigator={navigator} {...route.passProps} />}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'more'}
                        title="账号"
                        renderIcon={() => <Image source={TAB_NORMAL_4} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_4} style={styles.icon}/>}
                        selectedTitleStyle={{color: 'red'}}
                        onPress={() => this.setState({selectedTab: 'more'})}>
                        <Navigator
                            initialRoute={{name: '账号', component: Shop}}
                            configureScene={this.configureScene}
                            renderScene={(route, navigator) => <route.component
                                navigator={navigator} {...route.passProps} />}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 20,
        height: 20
    }
});
