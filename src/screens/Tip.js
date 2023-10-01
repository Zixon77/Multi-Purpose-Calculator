import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../assets/colors'
import Person from '../components/Tip/Person'
import BillTemp from '../components/Tip/BillTemp'
import ChooseTip from '../components/Tip/ChooseTip'
import Split from '../components/Tip/Split'
import Total from '../components/Tip/Total'
import { useState } from 'react'

const Tip = () => {
  const[bill,setBill] = useState(0)
  const[tip,setTip] = useState(0)
  const[total,setTotal] = useState(0)
  const[split,setSplit] = useState(1)
  const[per,setPer] = useState(0)

  console.log( bill)
  console.log( tip)


    useEffect(() =>{
      setBill(Number(bill))
    },[bill])

    useEffect(() =>{
      setPer(Math.round(Number(total / split)))
    },[total,split])

    useEffect(() =>{
        setTotal(Number(bill + tip))
    },[bill,tip])
   
  return (
    <View style = {styles.container}>
      <Person per = {per}/>
      <BillTemp onChangeText = {text =>setBill(text)} amount = {bill} title = "BILL AMOUNT"/>
      <ChooseTip tip = {tip} one = {() => setTip(Math.round(Number(bill * 0.10)))} two = {() => setTip(Math.round(Number(bill * 0.15)))} three = {() => setTip(Math.round(Number(bill * 0.20)))}/>
     <Total amount = {total}/>
      <Split split = {split}   onValueChange = {val => setSplit(val)}/>
    </View>
  )
}

export default Tip

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.frenchGray
  }
})