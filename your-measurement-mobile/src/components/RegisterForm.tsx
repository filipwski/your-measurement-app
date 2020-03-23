// external libraries
import React, { useState } from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet, TextInput } from 'react-native'

// own components
import GradientButton from './GradientButton'

// utilities
import { createUser } from '../utilities/createUser'
import { Navigation } from '../utilities/NavigationUtilities'

interface RegisterFormParams {
  navigation: Navigation
}

const RegisterForm: React.FC<RegisterFormParams> = params => {
  const [deviceId, setDeviceId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      <LinearGradient
        colors={['#fc2570', '#fd7227']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        style={styles.gradientField}
      >
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
        <TextInput
          autoCompleteType='password'
          placeholder='Confirm password'
          style={styles.textInput}
          onChangeText={text => setRepeatedPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          placeholder='Device ID'
          style={styles.textInput}
          onChangeText={text => setDeviceId(text)}
        />
        <GradientButton
          title='Submit'
          onPress={() =>
            createUser(
              email,
              deviceId,
              password,
              repeatedPassword,
              params.navigation
            )
          }
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

export default RegisterForm
