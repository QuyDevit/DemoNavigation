import React, { useState } from 'react'
import {Appbar,Menu} from 'react-native-paper'
import {getHeaderTitle} from '@react-navigation/elements'

const CustomNavigationBar = ({navigation,route,options,back}) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const title = getHeaderTitle(options,route.name);
  return (
   <Appbar>
    {back && <Appbar.BackAction onPress={navigation.goBack}></Appbar.BackAction>}
    <Appbar.Content title={title}></Appbar.Content>
    {!back && 
        <Menu 
            visible={visible}
            onDismiss={closeMenu}
            anchor ={
                <Appbar.Action
                    icon='dots-vertical'
                    onPress={openMenu}
                ></Appbar.Action>
            }
        >
            <Menu.Item
                onPress={() => {
                    navigation.navigate('Home')
                }}
                title='Home'
            ></Menu.Item>
             <Menu.Item
                onPress={() => {
                    navigation.navigate('Detail')
                }}
                title='Detail'
            ></Menu.Item>
             <Menu.Item
                onPress={() => {
                    console.log('Option 3 was pressed');
                }}
                title='Option 3'
                disabled
            ></Menu.Item>
        </Menu>}
   </Appbar>
  )
}

export default CustomNavigationBar