import { View, Text, StyleSheet ,Button} from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <View style={mystyles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() =>navigation.navigate('Detail')} title='Go to Detail'>
         
      </Button>
     
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

export default HomeScreen