import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import CustomerDrawerNavigation from '../components/CustomerDrawerNavigation';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';


const Drawer = createDrawerNavigator();
const DemoDrawerNavigator = () => {
  return (
   <Drawer.Navigator initialRouteName='Home' drawerContent={props => <CustomerDrawerNavigation {...props}></CustomerDrawerNavigation>}> 
        <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name='Detail' component={DetailScreen}></Drawer.Screen>
   </Drawer.Navigator>
  )
}

export default DemoDrawerNavigator