import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const Faren = (props) => {
  return (
    <View style = {styles.con}>
      <Text style = {styles.title}>FAHRENHEIT</Text>
      <View style ={{flexDirection:"row"}}>
        <TextInput
            style = {styles.temp}
            value = {props.faren}
            onChangeText={props.onChangeText}
            placeholder='-40.0'
            placeholderTextColor={colors.platnium}
        />
        <Text style = {styles.temp}>°</Text>
      </View>
    </View>
  )
}

export default Faren

const styles = StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:colors.outerSpace,
        justifyContent:"center",
        alignItems:"center",
        width:'100%'
    },
    title:{
        fontSize:35,
        color:colors.platnium,
        fontWeight:"200",
        alignSelf:"center",
       
    },
    temp:{
        fontSize:100,   
        fontWeight:"200",
        color:colors.platnium,
        alignSelf:"center",

    }
})