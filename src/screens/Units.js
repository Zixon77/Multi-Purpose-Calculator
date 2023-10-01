import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'

const Units = () => {
  const [input,setInput] = useState(0)
  const [out,setOut] = useState(0)

  return (
    <View style = {styles.container}>
      <TextInput
        style = {styles.input}
        keyboardType='numeric'
        value={input}
        onChangeText={text => setInput(text)}
      />
      <Text style = {styles.to}>to</Text>
      <Text style = {styles.out}>{out}</Text>
    </View>
  )
}

export default Units

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.frenchGray
  },
  input:{
    borderBottomWidth:1,
    width:"35%",
    margin:"5%",
    fontSize:20
  },
  to:{
    fontSize:20, 
    fontWeight:"bold",
   
  },
  out:{
    borderBottomWidth:1,
    width:'35%',
    fontSize:20,
  }
})