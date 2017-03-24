import React from 'react';
import { View,Text,Image,TextInput } from 'react-native';

const SearchBar = (props) => {
    const { viewstyle,s_img,input,c_img } = styles;
    return(
        <View style = {viewstyle}>     
            <TextInput style = {input} placeholder ="Search" placeholderTextColor={'rgb(185,163,227)'} />
            <Image style = {s_img} source = {require('../Asset/icon_search.png')} />
            <Image style = {c_img} source = {require('../Asset/btn_cast.png')} />
        </View>
    );
};

const styles = {
    viewstyle:{
        width:375,
        height:64,
        backgroundColor:'#6441A5',
        flexDirection:'row',
    },
    s_img:{
        width:18,
        height:18,
        position:'absolute',
        top:32.5,
        left:17,
    },
    input:{
        width:320,
        height:30,
        backgroundColor:'rgb(49,31,83)',
        borderRadius:5,
        top:26.5,
        left:8.5,
        fontSize:15,
        paddingLeft:32,
    },
    c_img:{
        width:33,
        height:33,
        position:'absolute',
        top:25,
        left:333.5,
    },
};

export default SearchBar;