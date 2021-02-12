import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LogIn from '../pages/Login';
import MyTabs from './TabNavigator'
const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="LogIn" 
        component={LogIn}
        options={{headerShown: false}}
        />
        
        <AuthStack.Screen 
        name="MyTabs" 
       
        component={MyTabs}
    
            options={{headerShown: false}}
        />
    </AuthStack.Navigator>
    );}

export default AuthRoutes;
