import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Home from '../pages/Home';


const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();



function AppRoutes(){
    return(
    <Tab.Navigator>
        <Tab.Screen 
        name="Login" 
        component={Login}
        />
        <Tab.Screen 
        name="Home" 
        component={Home}
        />
    </Tab.Navigator>
    );
}

export default AppRoutes;
