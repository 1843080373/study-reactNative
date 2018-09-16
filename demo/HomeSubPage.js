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
    WebView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Home from './Home';
var {width}=require('Dimensions').get('window');
var Props = {};
export default class HomeSubPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.wapUrl,
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
            scalesPageToFit: true
        }
    }

    inputText = '';
    render() {
        this.inputText = this.state.url;
        return (

            <View style={styles.container}>
                <View style={[styles.addressBarRow]}>
                <TouchableOpacity
                    onPress={this.goBack}
                    style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>
                    <Text>
                        {'<'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.goForward}
                    style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>
                    <Text>
                        {'>'}
                    </Text>
                </TouchableOpacity>
                    <TextInput
                        ref={'TEXT_INPUT_REF'}
                        autoCapitalize="none"
                        defaultValue={this.state.url}
                        onSubmitEditing={this.onSubmitEditing}
                        onChange={this.handleTextInputChange}
                        clearButtonMode="while-editing"
                        style={styles.addressBarTextInput}
                    />
                    <TouchableOpacity onPress={this.pressGoButton}>
                        <View style={styles.goButton}>
                            <Text>
                                Go!
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <WebView
                    ref={'webView'}
                    style={{
                        width: width,
                        alignItems: 'center',
                        paddingRight:10
                    }}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                />

            </View>

        );
    }

    goBack(){
       // this.props.navigator.pop();
    }

    goForward(){

    }

    handleTextInputChange(){

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addressBarRow: {
        flexDirection: 'row',
        padding: 8,
    },
    webView: {
        height: 350,
    },
    addressBarTextInput: {
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        fontSize: 14,
    },
    navButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        borderRadius: 3,
    },
    disabledButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        borderRadius: 3,
    },
    goButton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        borderColor: 'transparent',
        borderRadius: 3,
        alignSelf: 'stretch',
    },
    statusBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22,
    },
    statusBarText: {
        color: 'white',
        fontSize: 13,
    },
    spinner: {
        width: 20,
        marginRight: 6,
    },
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 0.5,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray',
    }
});
