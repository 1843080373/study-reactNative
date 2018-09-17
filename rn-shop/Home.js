import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

import HomeDetail from './HomeDetail';
import Gpage from './Gpage';
import HomeTop from './HomeTop';
import HomeMView from './HomeMView';
import HomeBottom from './HomeBottom';
import HomeShopCenter from './HomeShopCenter';
import GuestYouLike from './GuestYouLike';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var Props;
Props = {};
export default class Home extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*这里是首页导航条*/}
                {this.renderTab()}
                {/*这里是首页的主要内容*/}
                <ScrollView>
                    {/*这里是首页的上部*/}
                    <HomeTop/>
                    {/*这里是首页的中部*/}
                    <HomeMView/>
                    <View style={{marginTop:10}}>
                        <Image style={{width:width,height:80}} source={require('./img/ad.jpg')}/>
                    </View>
                    {/*这里是首页的底部*/}
                    <HomeBottom nav={this.props.navigator}/>
                    <HomeShopCenter popToHome={(url,shopSale) => this.pushToDetail(url,shopSale)}/>
                    {/*猜你喜欢*/}
                    <GuestYouLike/>
                </ScrollView>
            </View>
        );
    }

    //跳转到购物中心详情页
    pushToDetail(url,shopSale) {
      // alert(shopSale);
        this.props.navigator.push(
            {
                component:HomeDetail,
                passProps:{
                    wapUrl:url,
                    shopSale:shopSale
                }
            }
        );
    }

    //首页导航条
    renderTab() {
        return (
            <View style={styles.topTabStyle}>
                <TouchableOpacity onPress={() => {
                    this.toListPage()
                }}>
                    <Text style={{color: 'white', marginTop: 20,fontSize:15}}>成都</Text>
                </TouchableOpacity>
                <View style={styles.textStyle}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder='请输入商家、品牌'
                    />
                </View>
                <View style={styles.imgViewStyle}>
                    <TouchableOpacity onPress={() => {
                        alert('点击了')
                    }}>
                        <Image source={require('./img/search.png')} style={styles.imgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        alert('点击了')
                    }}>
                        <Image source={require('./img/scanner.png')} style={styles.imgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    toListPage() {
        this.props.navigator.push({
            component: Gpage
        });
    }
}
const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            alignItems: 'center'
        },
        textStyle: {
            width: width * 0.75,
            borderWidth: 2,
            borderColor: 'red',
            height: 40,
            backgroundColor: 'white',
            marginTop: 13,
            borderRadius: 20,
            paddingLeft: 10
        },
        imgStyle: {
            width: 25,
            height: 25,
            marginLeft: 4
        },
        topTabStyle: {
            flexDirection: 'row',
            backgroundColor: 'rgba(255,96,0,1.0)',
            height: 64,
            width: width,
            justifyContent: 'space-around'
        },
        imgViewStyle: {
            flexDirection: 'row',
            height: 64,
            alignItems: 'center'
        }
    });
