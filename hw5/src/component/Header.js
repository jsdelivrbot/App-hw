import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

const Header = (props) => {
    const { viewstyle,p_arrow,p_heart,textstyle } = styles;

    return(
        <View style = {viewstyle}>
            <Image style = {p_arrow} source = {require('../Asset/btn_back.png')} />
            <Text style = {textstyle}>Heartstone</Text>
            <Image style = {p_heart} source = {require('../Asset/btn_like.png')} />
        </View>
    );
};

const styles = {
    viewstyle:{
        backgroundColor:'#6441A5',
        height:64,
        flexDirection:'row',
    },
    p_arrow:{
        width:33,
        height:33,
        left:8.5,
        top:25,
    },
    textstyle:{
        // backgroundColor:'#6441A5',
        fontSize:18,
        color:'#fff',
        width:108,
        textAlign: 'center',
        height:21.5,
        marginTop:30.5,
        marginLeft:105.5,
    },
    p_heart:{
        width:33,
        height:33,
        top:25,
        left:78.5,
    },
};

export default Header;