import React from 'react';
import { ScrollView,View,Image } from 'react-native';

const Content1 = (props) => {
    const { container,viewstyle,img1,img2,img3 } = styles;

    return(
        <ScrollView style = {container}>
            <View style = {viewstyle}>
                <Image style = {img1} source = {require('../Asset/img_firebat.png')} />
                <Image style = {img2} source = {require('../Asset/img_forsen.png')} />
                <Image style = {img3} source = {require('../Asset/img_kolento.png')} />
            </View>
        </ScrollView>
    );
};
const styles = {
    container:{
        
        flex:1,
    },
    viewstyle:{
        flexDirection:'column',
        backgroundColor:'rgb(241,241,241)',
    },
    img1:{
        width:365,
        height:200,
        marginTop:5.5,
        marginLeft:4.5,
    },
    img2:{
        width:365,
        height:200,
        marginTop:5,
        marginLeft:4.5,
    },
    img3:{
        width:365,
        height:144,
        marginTop:5,
        marginLeft:4.5,
    },
};

export default Content1;