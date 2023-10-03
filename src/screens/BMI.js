import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import colors from '../assets/colors'
import Height from '../components/BMI/Height'
import Weight from '../components/BMI/Weight'
import Res from '../components/BMI/Res'
//BMI = kg/m^2
const BMI = () => {
  const[height,setHeight] = useState(36)
  const [weight,setWeight] = useState(50)
  const[bmi,setBmi] = useState(0)



  useEffect(() =>{
    const weig = parseFloat(weight)
    const kgs = weig * 0.45359237;
    const newHeight = height * 0.0254;
    setBmi((kgs / (newHeight**2)).toFixed(1))
  },[height,weight,bmi])

  
  return (
    <View style = {styles.container}>
      <Res res = {bmi}/>
      <Height height = {height}   onValueChange = {val => setHeight(val)}/>
      <Weight weight = {weight}  onChangeText = {text => setWeight(text)} />
    </View>
  )
}

export default BMI

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.frenchGray
  }
})