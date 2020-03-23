// external libraries
import React from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet } from 'react-native'
import MeasurementsListElement from './MeasurementsListElement'

// model
import { Measurement } from '../model/Measurement'

interface MeasurementsListParams {
  measurementsArray?: Measurement[]
}

const MeasurementsList: React.FC<MeasurementsListParams> = props => {
  return (
    <LinearGradient
      colors={['#fc2570', '#fd7227']}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.gradientField}
    >
      <ScrollView>
        {props.measurementsArray.length > 0
          ? props.measurementsArray.map((measurement, index) => (
              <MeasurementsListElement key={index} measurement={measurement} />
            ))
          : null}
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradientField: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '55%',
    height: 35,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 5
  },
  button: {
    width: '55%',
    borderRadius: 20,
    alignSelf: 'center',
    height: 40,
    marginTop: 15
  }
})

export default MeasurementsList
