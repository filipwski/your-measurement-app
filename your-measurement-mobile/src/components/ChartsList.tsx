// external libraries
import React, {useEffect, useState} from 'react'

// external components
import {LinearGradient} from 'expo-linear-gradient'
import {ScrollView, StyleSheet, View} from 'react-native'
import PureChart from 'react-native-pure-chart'

// model
import { Measurement } from '../model/Measurement'

interface ChartsListParams {
    measurementsArray?: Measurement[]
}

let temperatureData = []
let humidityData = []

const ChartsList: React.FC<ChartsListParams> = props => {
    props.measurementsArray.forEach(measurement => {
        temperatureData.push({x: measurement.date.toLocaleString(), y: parseInt(measurement.temperature)})
        humidityData.push({x: measurement.date.toLocaleString(), y: parseInt(measurement.humidity)})
    })

    return (
        <LinearGradient
            colors={['#fc2570', '#fd7227']}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            style={styles.gradientField}
        >
            <ScrollView>
                { props.measurementsArray.length > 0
                    ? (
                        <View>
                            <PureChart
                                data={temperatureData}
                                type='line'
                                width={'100%'}
                                height={200}
                            />
                            <PureChart
                                data={humidityData}
                                type='line'
                                width={'100%'}
                                height={200}
                            />
                        </View>
                    ) : null}
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
    }
})

export default ChartsList
