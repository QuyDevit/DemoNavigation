import { View, Text } from 'react-native'
import {Drawer} from 'react-native-paper'
import React from 'react'

const CustomerDrawerNavigation = ({navigation}) => {
  return (
    <View style={{paddingTop:50}}>
        <Drawer.Section>
            <Drawer.Item
                label='Home'
                icon={'home'}
                onPress={() => navigation.navigate('Home')}
            >
            </Drawer.Item>
             <Drawer.Item
                label='Detail'
                icon={'email'}
                onPress={() => navigation.navigate('Detail')}
            >
            </Drawer.Item>
         
        </Drawer.Section>
    </View>
  )
}

export default CustomerDrawerNavigation