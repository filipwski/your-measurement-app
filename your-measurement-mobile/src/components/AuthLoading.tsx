// external libraries
import React from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'

const AuthLoading = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fc2570', '#fd7227']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        style={styles.gradientField}
      >
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientField: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default AuthLoading
