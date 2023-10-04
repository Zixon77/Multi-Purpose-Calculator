import { Pressable, StyleSheet, Touchable,TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors'
import Faren from '../components/Temperature/Faren'
import Cels from '../components/Temperature/Cels'
import { Keyboard } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
const Temperature = () => {

  const [faren,setFaren] = useState(-40)
  const [cels,setCels] = useState(-40)

  useEffect(() =>{
    setCels(((faren - 32) * 5/9).toFixed(1))
   // setFaren(((cels * 9/5) +32).toFixed(2))
  },[faren,cels])
  return (
    <TouchableWithoutFeedback onPress={ () =>Keyboard.dismiss()}>
      <View style = {styles.con}>
        <Faren faren = {faren} onChangeText = {val => setFaren(val)}/>
        <Cels cels = {cels} onChangeText = {val => setCels(val)}/>
        <Pressable style = {styles.touch}>
           <Ionicons name="swap-vertical" size={50} color="black" />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Temperature

const styles = StyleSheet.create({
  con:{
    flex:1,justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.frenchGray
  },
  touch:{
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.outerSpace,
    borderRadius:100,
    padding:"5%"
  }
})