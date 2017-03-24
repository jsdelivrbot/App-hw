import React from 'react';
import { 
    AppRegistry,
    View 
} from 'react-native';
import SearchBar from './src/component/searchBar.js';
import Content2 from './src/component/content2.js';
import MenuBar from './src/component/menuBar.js';
const page3 = () => {
    return(
        <View>
            <SearchBar />
            <Content2 />
            <MenuBar />
        </View>
    );
};

export default page3;