import 'react-native-gesture-handler'

import React from 'react';

import { View,Text,StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routers';

export default function App() {

 return (
   <NavigationContainer>
         <StatusBar backgroundColor="transparent" translucent barStyle="light-content"/>
         <Routes/>
   </NavigationContainer>
  );

}