// external libraries
import React from 'react'
import { NavigationParams } from 'react-navigation'

// own components
import LoginForm from '../components/LoginForm'

// utilities
import { useNavigation } from '../utilities/NavigationUtilities'

const LoginScreen = () => {
  const navigation = useNavigation<NavigationParams>()

  return <LoginForm navigation={navigation} />
}

LoginScreen.navigationOptions = () => ({
  title: 'Sign In',
})

export default LoginScreen
