// external libraries
import React from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet } from 'react-native'
import DevicesListElement from './DevicesListElement'

// model
import { Device } from '../model/Device'

// utilities
import { Navigation } from '../utilities/NavigationUtilities'

interface DevicesListParams {
  navigation: Navigation
}

const DevicesList: React.FC<DevicesListParams> = (props) => {
  return (
    <LinearGradient
      colors={['#fc2570', '#fd7227']}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.gradientField}
    >
      <ScrollView>
        <DevicesListElement
          device={new Device('Test123321')}
          navigation={props.navigation}
        />
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradientField: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '55%',
    height: 35,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 5,
  },
  button: {
    width: '55%',
    borderRadius: 20,
    alignSelf: 'center',
    height: 40,
    marginTop: 15,
  },
})

export default DevicesList
