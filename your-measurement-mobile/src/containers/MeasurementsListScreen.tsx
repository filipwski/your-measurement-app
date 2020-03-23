// external libraries
import React, { useEffect, useState } from 'react'
import { NavigationParams } from 'react-navigation'
import firebase from 'firebase'

// external components
import { Text } from 'react-native'

// own components
import MeasurementsList from '../components/MeasurementsList'

// utilities
import { Navigation, useNavigation } from '../utilities/NavigationUtilities'

// model
import { Measurement } from '../model/Measurement'

const MeasurementsListScreen = () => {
  const navigation = useNavigation<NavigationParams>()

  const [measurementsArray, setMeasurementsArray] = useState([])

  const sensorID = 'DHT22'

  useEffect(() => {
    const db = firebase.firestore()
    db.collection('measurement')
      .doc(sensorID)
      .get()
      .then(doc => {
        const data = Object.values(doc.data())
        let internalMeasurementsArray: Measurement[] = []
        for (let i in data) {
          const element = data[i]
          internalMeasurementsArray.push(
            new Measurement(
              new Date(
                element.year,
                element.month,
                element.day,
                element.hour,
                element.minutes,
                element.second
              ),
              element.temperature,
              element.humidity
            )
          )
        }
        setMeasurementsArray(internalMeasurementsArray)
      })
  })

  return <MeasurementsList measurementsArray={measurementsArray} />
}

MeasurementsListScreen.navigationOptions = ({
  navigation
}: {
  navigation: Navigation
}) => ({
  title: 'Measurements'
})

export default MeasurementsListScreen
