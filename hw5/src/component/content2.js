import React from 'react';
import { ScrollView,View,Image } from 'react-native';

const Content2 = (props) => {
    const { viewstyle,img } = styles;
    return(
        <ScrollView>
            <View style = {viewstyle}>
                <Image style = {img} source = {require('../Asset/img_leagueoflegends.png')} />
                <Image style = {img} source = {require('../Asset/img_counterstrike.png')} />               
            </View>
            <View style = {viewstyle}>
                <Image style = {img} source = {require('../Asset/img_hearthstone.png')} />
                <Image style = {img} source = {require('../Asset/img_dota2.png')} />               
            </View>
            <View style = {viewstyle}>
                <Image style = {img} source = {require('../Asset/img_h1z1.png')} />
                <Image style = {img} source = {require('../Asset/img_destiny.png')} />               
            </View>
        </ScrollView>
    );
};

const styles = {
    viewstyle:{
        backgroundColor:'rgb(241,241,241)',
        flex:1,
        flexDirection:'row',
    },
    img:{
        width:180,
        height:180,
        marginTop:5,
        marginLeft:5,
    }
};

export default Content2;