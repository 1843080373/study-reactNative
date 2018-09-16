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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Props = {};
var cell = 5;
var cellWidth = Platform.OS === 'ios' ? 70 : 50;
var vM = (width - cellWidth * cell) / (cell + 1);
export default class HomeTopList extends Component<Props> {

    static defaultProps = {
        dataArr: []
    }

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 != r2
            }
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.lsStyle}
                scrollEnabled={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}/>
        )
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => {
            }}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowData.icon}}
                           style={{width: 32, height: 32}}
                    />
                    <Text style={{fontSize: 12}}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    lsStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width
    },
    cellStyle: {
        // backgroundColor:'red',
        width: cellWidth,
        height: cellWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: vM
    }
});
