import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import Slider from '@react-native-community/slider'
import colors from '../../assets/colors'


const Precision = (props) => {

    const [sliderValue, setSliderValue] = useState(props.precision);

  return (
    <View style = {styles.container}>
      <Text>Precision: {props.precision}</Text>
      <Slider
        style={{width: "75%",marginLeft:"5%"}}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor={colors.payneGray}
        maximumTrackTintColor={colors.outerSpace}
        thumbTintColor={colors.payneGray}
        onValueChange={props.onValueChange}
  />
    </View>
  )
}

export default Precision

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        padding:"5%",
        flexDirection:"row"
    },
})