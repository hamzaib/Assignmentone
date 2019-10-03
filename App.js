import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HomeScreen from './home';
import SettingScreen from './setting';
import AboutScreen from './about';

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Setting: SettingScreen
})


export default createAppContainer(tabNavigator)





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

