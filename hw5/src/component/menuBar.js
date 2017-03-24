import React from 'react';
import { View,Image,Text } from 'react-native';

const MenuBar = (props) => {
    const { viewstyle,img,textstyle1,textstyle2 } = styles;
    return(
        <View style = {viewstyle}>
            <View>
                <Image style = {img} source = {require('../Asset/btn_games_selected.png')} />
                <Text style = {textstyle1}>Games</Text>
            </View>
            <View>
                <Image style = {img} source = {require('../Asset/btn_channels.png')} />
                <Text style = {textstyle2}>Channels</Text>
            </View>
            <View>
                <Image style = {img} source = {require('../Asset/btn_following.png')} />
                <Text style = {textstyle2}>Following</Text>
            </View>
            <View>
                <Image style = {img} source = {require('../Asset/btn_me.png')} />
                <Text style = {textstyle2}>Me</Text>
            </View>
        </View>
    );
};
const styles = {
    viewstyle:{
        height:49,
        flex:1,
        flexDirection:'row',
        position:'absolute',
        backgroundColor:'#fff',
        top:618.5,
    },
    img:{
        width:93.75,
        height:49,
    },
    textstyle1:{
        color:'#6441A5',
        width:33.5,
        height:12,
        fontSize:10,
        position:'absolute',
        textAlign:'center',      
        top:36,
        left:30.25,
    },
    textstyle2:{
        color:'rgb(187,187,187)',
        width:46,
        height:12,
        fontSize:10,
        position:'absolute',
        textAlign:'center',
        top:36,
        left:23.75,
    },
};

export default MenuBar;