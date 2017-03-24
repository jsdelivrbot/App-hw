import React from 'react';
import { 
    AppRegistry,
    View,
    Image,
    Text
 } from 'react-native';

 const page1 = () =>{
     const { pic , background } = styles;

     return(
         <View style = {background}>
            <Image style = {pic} source = {require('./src/Asset/logo_twitch.png')}/>
         </View>
     );
 };

 const styles = {
     background: {
         backgroundColor:'#6441A5',
         flex:1,
     },
     pic :{
         width:185.5,
         height:61.5,
         top:273,
         left:95.5,     
     },
 };

export default page1;