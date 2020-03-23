// external libraries
import React, { useState } from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import {
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator
} from 'react-native'

// own components
import GradientButton from './GradientButton'

// utilities
import { logIn } from '../utilities/logIn'
import { Navigation } from '../utilities/NavigationUtilities'

interface LoginFormParams {
  navigation: Navigation
}

const LoginForm: React.FC<LoginFormParams> = params => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activityIndicatorVisibility, showActivityIndicator] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      <LinearGradient
        colors={['#fc2570', '#fd7227']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        style={styles.gradientField}
      >
        {activityIndicatorVisibility ? (
          <ActivityIndicator animating={true} />
        ) : null}
        <TextInput
          autoCompleteType='email'
          placeholder='E-Mail'
          style={styles.textInput}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          autoCompleteType='password'
          placeholder='Password'
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <GradientButton
          title='Sign In'
          onPress={async () => {
            showActivityIndicator(true)
            logIn(email, password, params.navigation, () => {
              showActivityIndicator(false)
            })
          }}
          style={styles.button}
          colors={['#4075c9', '#54d9eb']}
        />
        <GradientButton
          title='Register'
          onPress={() => params.navigation.navigate('Register')}
          style={styles.button}
          colors={['#4075c9', '#54d9eb']}
        />
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
    marginTop: 10
  },
  button: {
    width: '55%',
    borderRadius: 20,
    alignSelf: 'center',
    height: 40,
    marginTop: 15
  }
})

export default LoginForm
