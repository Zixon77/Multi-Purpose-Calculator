import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
const GPA = () => {
  return (
    <View style = {styles.con}>  
      <Text>GPA</Text>
    </View>
  )
}

export default GPA

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.frenchGray
    }
})