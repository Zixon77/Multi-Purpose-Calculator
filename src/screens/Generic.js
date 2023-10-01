import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors'


const Generic = () => {
  return (
    <View style = {styles.container} >
      <Text style = {styles.val}>0</Text>
    </View>
  )
}

export default Generic

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.frenchGray
  },
  val:{
    fontSize:100,
    fontWeight:"100",
    color:colors.outerSpace
     
  }
})