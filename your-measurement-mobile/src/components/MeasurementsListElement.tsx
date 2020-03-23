// external libraries
import React from 'react'

// external components
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// model
import { Measurement } from '../model/Measurement'

// utilities

interface DeviceListElementParams {
  measurement: Measurement
}

const MeasurementsListElement: React.FC<DeviceListElementParams> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {' '}
        {props.measurement.date.toLocaleString()}
      </Text>
      <View style={styles.dataContainer}>
        <View style={styles.element}>
          <MaterialCommunityIcons
            name='temperature-celsius'
            style={styles.icon}
          />
          <Text style={styles.text}>{props.measurement.temperature}</Text>
        </View>
        <View style={styles.element}>
          <MaterialCommunityIcons name='water' style={styles.icon} />
          <Text style={styles.text}>{props.measurement.humidity}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 7,
    marginVertical: 2
  },
  date: {
    marginHorizontal: 7,
    marginVertical: 2,
    fontSize: 15,
    color: 'gray'
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: 45,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 10
  }
})

export default MeasurementsListElement
