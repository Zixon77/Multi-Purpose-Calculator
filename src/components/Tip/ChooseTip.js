import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import { useState } from 'react'
import { hasDarkPseudoClass } from 'nativewind/dist/utils/selector'

const ChooseTip = (props) => {

  const[tip,setTip ] = useState(props.tip)

  function handleChoice1(){
    props.one()
  }

  function handleChoice2(){
    props.two()
  }

  function handleChoice3(){
    props.three()
  }
  return (
    <View style = {styles.container}>
      <Text  style = {styles.header} >TIP</Text>
      <Text style = {styles.amount}>${props.tip}</Text>
      <View style = {styles.buttons}>
        <TouchableOpacity style = {styles.button} activeOpacity={0.75} onPress={handleChoice1}>
          <Text style = {styles.text}>10%</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} activeOpacity={0.75} onPress={handleChoice2}>
          <Text style = {styles.text}>15%</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} activeOpacity={0.75} onPress={handleChoice3}>
          <Text style = {styles.text}>20%</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ChooseTip

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        padding:"5%",
        borderBottomWidth:1,
        flex:.75,
    },
    header:{
        alignSelf:"flex-start",
        fontSize:17,
        color:colors.outerSpace
    },
    amount:{
        color:colors.outerSpace,
        alignSelf:"flex-start",
        fontSize:50,
        fontWeight:"300",
    },
    buttons:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      position:"absolute",
      left:"55%",
    },
    button:{
      backgroundColor:colors.outerSpace,
      padding:"6%",
      margin:'1%',
      borderRadius:5,
      
    },
    text:{
      color:colors.platnium,
    }
  })