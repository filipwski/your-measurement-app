// external libraries
import firebase from 'firebase'

// external components
import {Alert, AsyncStorage} from 'react-native'

// utilities
import {Navigation} from './NavigationUtilities'

export const logIn = async (
  email: string,
  password: string,
  navigation: Navigation,
  onFinish: () => void
) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert('Login', 'Do you want to stay logged in?', [
        {
          text: 'Yes',
          onPress: () => {
            AsyncStorage.setItem('userToken', 'stayLoggedIn')
            navigation.navigate('App')
          },
        },
        {text: 'No', onPress: () => navigation.navigate('App')},
      ])
    })
    .catch((error) => {
      alert(error.message)
    })
  onFinish()
}
