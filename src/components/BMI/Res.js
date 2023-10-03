import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Res = (props) => {

 const[cat,setCat] = useState('no')

function categorizeBMI(res) {
    let category;
    switch (true) {
      case res < 18.5:
        category = "Underweight";
        break;
      case res >= 18.5 && res < 25:
        category = "Normal Weight";
        break;
      case res >= 25 && res < 30:
        category = "Overweight";
        break;
      case res >= 30 && res < 35:
        category = "Obesity (Class I)";
        break;
      case res >= 35 && res < 40:
        category = "Obesity (Class II)";
        break;
      case res >= 40:
        category = "Obesity (Class III)";
        break;
      default:
        category = "Invalid BMI";
    }
  
    return category;
  }

useEffect(() =>{
    setCat(categorizeBMI(props.res))
},[props.res])

  return (
    <View>
      <Text>BMI: </Text>
      <Text>{cat}</Text>
      <Text>{props.res}</Text>
    </View>
  )
}

export default Res

const styles = StyleSheet.create({})