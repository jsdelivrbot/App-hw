import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';
import Header from './src/component/Header.js';
import SelectBar from './src/component/selectBar.js';
import Content1 from './src/component/content1.js';
import MenuBar from './src/component/menuBar.js';

const page2 = () => {
    return(
        <View style={{flex:1}}>
            <Header />
            <SelectBar />
            <Content1 />
            <MenuBar />
        </View>
    );
};

export default page2; 