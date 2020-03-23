// external libraries
import React, { useEffect } from 'react'
import { NavigationParams } from 'react-navigation'

// external components
import { AsyncStorage } from 'react-native'

// utilities
import AuthLoading from '../components/AuthLoading'
import { useNavigation } from '../utilities/NavigationUtilities'

const AuthLoadingScreen = () => {
  const navigation = useNavigation<NavigationParams>()

  useEffect(() => {
    _bootstrapAsync()
  })

  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    navigation.navigate(userToken ? 'App' : 'Auth')
  }

  return <AuthLoading />
}

export default AuthLoadingScreen
