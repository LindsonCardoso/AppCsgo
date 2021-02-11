import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LogIn from '../pages/Login';
import Home from '../pages/Home';

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
        name="Home" 
        component={Home}
        
        options={{
            title: 'Players',
            headerTintColor: '#fff',
            headerShown: true,
             headerTransparent:true,
            headerTitleStyle: {
              fontWeight: 'bold',
            },}}
        />
    </AuthStack.Navigator>
    );}

export default AuthRoutes;
