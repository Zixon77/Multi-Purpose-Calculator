import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const Total = (props) => {
  return (
 <View style = {styles.container}>
    <Text style = {styles.header}>TOTAL</Text>
    <Text  style = {styles.amount} >${props.amount}</Text>
  </View>
  )
}

export default Total
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        padding:"5%",
        borderBottomWidth:1,
        flex:.75
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
        fontWeight:"300"
    }
  })