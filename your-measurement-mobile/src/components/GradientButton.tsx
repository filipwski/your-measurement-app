// external libraries
import React from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface GradientButtonProps {
  onPress: () => any
  title: string
  style?: ViewStyle
  colors: string[]
}

const GradientButton: React.FC<GradientButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={props.colors}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        style={props.style}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>{props.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton
