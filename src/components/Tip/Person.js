import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
const Person = (props) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>TOTAL PER PERSON</Text>
      <Text style = {styles.amount}>${props.per}</Text>
    </View>
  )
}

export default Person


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.outerSpace,
        width:"100%",
        padding:"5%",
        flex:1.25
    },
    header:{
        color:colors.platnium,
        alignSelf:"flex-start",
        fontSize:17,
    },
    amount:{
        color:colors.platnium,
        alignSelf:"flex-start",
        fontSize:80,
    }
  })