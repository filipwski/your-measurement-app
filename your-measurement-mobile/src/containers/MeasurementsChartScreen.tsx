// external libraries
import React, {useEffect, useState} from 'react'
import { NavigationParams } from 'react-navigation'
import firebase from "firebase";

// own components
import ChartsList from '../components/ChartsList'

// utilities
import { Navigation, useNavigation } from '../utilities/NavigationUtilities'

// model
import {Measurement} from "../model/Measurement";

const MeasurementsChartScreen = () => {
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

  return <ChartsList measurementsArray={measurementsArray} />
}

MeasurementsChartScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation,
}) => ({
  title: 'Chart',
})

export default MeasurementsChartScreen
