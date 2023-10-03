import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import colors from '../../assets/colors'
import Slider from '@react-native-community/slider'

const Height = (props) => {
    const [sliderValue, setSliderValue] = useState(props.height);
  return (
    <View style  = {styles.container}>
         <Text style = {styles.title}>HEIGHT</Text>
         <Text>{props.height} in</Text>
         <Slider
        style={{width: "95%",marginLeft:"5%",height:"10%"}}
        minimumValue={36}
        maximumValue={108}
        step={1}
        minimumTrackTintColor={colors.platnium}
        maximumTrackTintColor={colors.platnium}
        thumbTintColor={colors.platnium}
      onValueChange={props.onValueChange}
  />
    </View>
  )
}

export default Height

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:colors.outerSpace,
        width:"85%",
        height:"15%",
        borderRadius:10
    },
    title:{
        color:colors.platnium,
        fontSize:25, 
        fontWeight:'bold',
    },

})