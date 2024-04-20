import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomNavigationBar from '../components/CustomNavigationBar';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();
const DemoStackNavigator = () => {
  return (
   <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            header:(props) =><CustomNavigationBar {...props}></CustomNavigationBar>
        }}
   >
    <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
   </Stack.Navigator>
  )
}

export default DemoStackNavigator