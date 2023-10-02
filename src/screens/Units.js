import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors'
import Precision from '../components/Units/Precision'


const Units = () => {
  const [input, setInput] = useState('');
  const [out, setOut] = useState('');
  const [precision,setPrecision] = useState(0)

  useEffect(() => {
    const inputValue = parseFloat(input);
    if (!isNaN(inputValue)) {
      setOut((inputValue /12).toFixed(precision));
    }
  }, [input,precision]);


  return (
    <View style = {styles.container}>
      <Precision precision = {precision} onValueChange = {val => setPrecision(val)}/>
      <TextInput
        style = {styles.input}
        keyboardType='numeric'
        placeholder='000'
        value={input}
        onChangeText={text => setInput(text.toString())}
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
    width:'35%',
    fontSize:30,
  }
})