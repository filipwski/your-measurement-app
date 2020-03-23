// external libraries
import React from 'react'
import { NavigationParams } from 'react-navigation'

// own components
import RegisterForm from '../components/RegisterForm'

// utilities
import { Navigation, useNavigation } from '../utilities/NavigationUtilities'

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationParams>()

  return <RegisterForm navigation={navigation} />
}

RegisterScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation,
}) => ({
  title: 'Register',
})

export default RegisterScreen
