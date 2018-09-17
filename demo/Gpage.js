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
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
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
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />

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
    renderNavBar() {
        return (
            <View style={styles.autoViewStyle}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20}}>商品</Text>
                <TouchableOpacity onPress={() => {
                    alert(1)
                }} style={styles.ocStyle}>
                    <Image source={require('./img/gootlist.png')} style={styles.imgStyle}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
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
    },
    imgStyle: {
        width: 28,
        height: 28,
        marginLeft: 4,
    },
    ocStyle: {
        //绝对定位
        position: 'absolute',
        right: 10,
        bottom: 17
    },
    autoViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 64,
        width: width,
        justifyContent: 'center'
    }
});
