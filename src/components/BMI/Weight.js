import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
const Weight = (props) => {
  return (
    <View style = {styles.container}> 
      <TextInput
        style = {styles.input}
        value = {props.weight}
        keyboardType='numeric'
        onChangeText={props.onChangeText}
      />
      <Text>lbs</Text>
    </View>
  )
}

export default Weight

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        borderBottomWidth:1,
        fontSize:17
      
    }
})