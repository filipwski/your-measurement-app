// external libraries
import React from 'react'

// external components
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

// model
import { Device } from '../model/Device'

// utilities
import { Navigation } from '../utilities/NavigationUtilities'

interface DeviceListElementParams {
  device: Device
  navigation: Navigation
}

const DevicesListElement: React.FC<DeviceListElementParams> = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.navigation.navigate('DeviceDetails')}
      >
        <MaterialCommunityIcons name='raspberry-pi' style={styles.icon} />
        <Text style={styles.text}>{props.device.deviceID}</Text>
        <Ionicons name='ios-arrow-forward' style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 7,
    marginVertical: 2
  },
  icon: {
    fontSize: 45,
    color: 'white'
  },
  text: {
    color: 'white'
  }
})

export default DevicesListElement
