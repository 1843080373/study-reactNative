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
    TouchableOpacity,
    Image
} from 'react-native';
import HomeShopItem from './HomeShopItem';

var dataGoods = require('./guestYouLike');
var Props = {};
export default class GuestYouLike extends Component<Props> {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 != r2
            }
        });
        this.state = {
            dataSource: ds.cloneWithRows(dataGoods)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <HomeShopItem
                    leftIcon={'mm02'}
                    leftTitle={'猜你喜欢'}/>
                {/*下部分,这里是个列表*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => {
            }} activeOpacity={0.5}>
                {/*左边*/}
                <View style={styles.listViewStyle}>
                    <Image style={styles.imgViewS} source={{uri: rowData.iconImg}}/>
                    {/*右边*/}
                    <View style={styles.rightView}>
                        <View style={styles.rightTop}>
                            <Text>{rowData.name}</Text>
                            <Text style={{color: 'green', fontSize: 13}}>{rowData.address}</Text>
                        </View>
                        <Text style={{color: 'gray', fontSize: 10}}>{rowData.desc}</Text>
                        <View style={styles.rightBottom}>
                            <Text style={{color: 'red', fontSize: 12}}>门市价:¥{rowData.price}</Text>
                            <Text>{rowData.sale}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flex:1
    },
    imgViewS: {
        width: 120,
        height: 90
    },
    listViewStyle: {
        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: '#e8e8e8',
        borderWidth: 0.5,
        flexDirection: 'row'
    },
    rightView: {
        marginLeft: 8,
        width: 220,
        justifyContent: 'center'
    },
    rightTop: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between'
    },
    rightBottom: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    }

});
