import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import colors from '../../assets/colors'
import Slider from '@react-native-community/slider';

const Split = (props) => {

    const [sliderValue, setSliderValue] = useState(props.split);

  return (
  <View style = {styles.container}>
    <View>
        <Text  style = {styles.header} >SPLIT</Text>
        <Text style = {styles.amount}>{props.split}</Text>
    </View>
      <Slider
        style={{width: "75%",marginLeft:"5%"}}
        minimumValue={1}
        maximumValue={20}
        step={1}
        minimumTrackTintColor={colors.payneGray}
        maximumTrackTintColor={colors.outerSpace}
        thumbTintColor={colors.payneGray}
        onValueChange={props.onValueChange}
  />
  </View>
  )
}

export default Split

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        padding:"5%",
        flex:.75,
        flexDirection:"row"
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