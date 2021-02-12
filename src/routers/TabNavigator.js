import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Players from '../pages/Players'
import Times from '../pages/Times'
import Perfil from '../pages/Perfil'
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen name="Players" component={Players}
             options={{
                tabBarLabel: 'Players',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}   
      
      />
      <Tab.Screen name="Times" component={Times}

      
      
      />
      <Tab.Screen name="Perfil" component={Perfil}
      
      
      
      />
    </Tab.Navigator>
  );
}

export default MyTabs;