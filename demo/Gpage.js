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
    ListView,
    Image,
    PixelRatio,
    TouchableOpacity
} from 'react-native';
import Home from './Home';
// 引入本地的数据
const wineArr = require('./wine.json');
export default class Gpage extends Component {
    constructor(props) {
        super(props);
        // 1.创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows([''])
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(wineArr)
        })
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
                <TouchableOpacity onPress={()=>{this.props.navigator.push({
                    component:Home
                })}}>
                    <Text style={{backgroundColor: 'white',height: 20,textAlign: 'center'}}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity
                style={styles.cellViewStyle}
                onPress={() => {/*alert('点击了第' + sectionID + '组中的第' + rowID + '行')*/}}
            >
                {/*左边*/}
                <Image source={{uri: rowData.icon}} style={styles.cellImgStyle}/>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text
                        style={styles.mainTitleStyle}
                        numberOfLines={2}
                    >
                        {rowData.name}
                    </Text>
                    <Text style={styles.subTitleStyle}>¥{rowData.price}.00</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    cellViewStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc',

        /*主轴的方向*/
        flexDirection: 'row',
        padding: 10,
        backgroundColor:'white'
    },

    cellImgStyle: {
        width: 90,
        height: 60,
        resizeMode: 'contain'
    },

    rightViewStyle: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'space-between',
        marginLeft: 20
    },

    mainTitleStyle: {
        fontSize: 15,
        color: '#999'
    },

    subTitleStyle: {
        color: 'red'
    }
});
