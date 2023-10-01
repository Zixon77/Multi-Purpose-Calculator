import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const BillTemp = (props) => {
  return (
    <View style = {styles.container}>
      <Text  style = {styles.header} >{props.title}</Text>
      <View style = {{flexDirection:"row",alignSelf:"flex-start"}}>
      <Text    style = {styles.amount}>$</Text>
      <TextInput
        value={(props.amount).toString()}
        placeholder='0'
        onChangeText={props.onChangeText}
        style = {styles.amount}
      />
      </View>

    </View>
  )
}

export default BillTemp

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