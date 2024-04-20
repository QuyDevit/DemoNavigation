import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const DetailScreen = () => {
  return (
    <View style={mystyles.container}> 
      <Text>Detail Screen</Text>
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


export default DetailScreen