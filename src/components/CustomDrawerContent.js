import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

const CustomDrawerContent = (props) => {
  return (
    <View style = {styles.container}>
      <SafeAreaView/>
      <Text style = {styles.title}>Calculators</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList  {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawerContent
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    color:colors.frenchGray,
    fontSize:30,
    fontWeight:"bold",
    marginLeft:"7%",
    marginTop:"10%"
  },
})