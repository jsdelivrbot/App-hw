import React from 'react';
import { View,Text } from 'react-native';

const selectBar = (props) =>{
    const { viewstyle,textstyle1,textstyle2,line } = styles;

    return(
        <View style = {viewstyle}>
            <View style = {viewstyle}>
                <Text style = {textstyle1}>Live</Text>
                <View style = {line}></View>
            </View>
            <View style = {viewstyle}>
                <Text style = {textstyle2}>Recent</Text>
            </View>
        </View>       
    );
};

const styles = {
    viewstyle:{
        width:187.5,
        height:44,
        backgroundColor:'rgb(255,255,255)',      
        flexDirection:'row',
    },
    textstyle1:{
        width:29,
        height:15.5,
        color:'#6441A5',
        fontSize:13,
        textAlign:'center',
        flexDirection:'row',
        top:15,
        left:79.5,
    },
    textstyle2:{
        width:53,
        height:15.5,
        color:'rgb(187,187,187)',
        fontSize:13,
        textAlign:'center',
        flexDirection:'row',
        top:15,
        left:67,
    },
    line:{
        backgroundColor:'#6441A5',
        width:187.5,
        height:5,
        flexDirection:'column',
        top:39,
        left:-28.8,
    }
};

export default selectBar;