/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native'; 
// import Page from './page1';
// import Page from './page2';
import Page from './page3';

//create a Component
const hw5 = () =>(
  <Page />
);

//Render it to the device
AppRegistry.registerComponent('hw5', () => hw5);

