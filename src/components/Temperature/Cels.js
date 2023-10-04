import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import store from '../../util/store'
const Cels = (props) => {
  return (
    <View style = {styles.con}>
        <Text style = {styles.title}>CELSIUS</Text>
            <View style ={{flexDirection:"row"}}>
                <TextInput
                    style = {styles.temp}
                    value = {props.cels}
                    onChangeText={props.onChangeText}
                    placeholder='-40'
                    placeholderTextColor={colors.platnium}
                />
                <Text style = {styles.temp}>°</Text>
        </View>
     </View>
  )
}

export default Cels

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:'100%'
    },
    title:{
        fontSize:35,
        color:colors.outerSpace,
        fontWeight:"200",
        alignSelf:"center",
    },
    temp:{
        fontSize:100,   
        fontWeight:"200",
        color:colors.outerSpace,
        alignSelf:"center",
    }
})