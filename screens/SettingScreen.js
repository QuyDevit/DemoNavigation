import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const SettingScreen = () => {
  return (
    <View style={mystyles.container}>
      <Text>Setting Screen</Text>
    </View>
  )
}

const mystyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SettingScreen