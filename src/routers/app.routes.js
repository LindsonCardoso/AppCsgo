import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

const AuthStack = createStackNavigator();

function AppRoutes(){
    return(
    <AppStack.Navigator 
    
    >
        <AppStack.Screen 
        name="Login" 
        component={Login}
        />
        <AuthStack.Screen 
        name="Home" 
        component={Home}
        />
    </AppStack.Navigator>
    );
}

export default AppRoutes;
