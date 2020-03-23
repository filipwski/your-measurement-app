// external libraries
import firebase from 'firebase'
import '@firebase/firestore'

// external components
import {Alert} from 'react-native'

// utilities
import {Navigation} from './NavigationUtilities'

export const createUser = (
  email: string,
  deviceId: string,
  password: string,
  repeatedPassword: string,
  navigation: Navigation,
) => {
  const _email = email.trim()
  const _deviceId = deviceId.trim()
  const _password = password.trim()
  const _repeatedPassword = repeatedPassword.trim()

  const db = firebase.firestore()
  const device = db.collection('devices').doc(_deviceId)

  if (_email == '') {
    alert('Email can\'t be empty.')
    return
  } else if (_deviceId == '') {
    alert('Device ID can\'t be empty')
    return
  } else if (_password == '' || _repeatedPassword == '') {
    alert('Password can\'t be empty.')
    return
  } else if (_password != _repeatedPassword) {
    alert('Password doesn\'t match.')
    return
  }

  device
    .get()
    .then(doc => {
      if (!doc.exists) {
        alert('Device with provided ID doesn\'t exist.')
        return
      } else if (!(doc.get('assignedUser') == '')) {
        alert('Device with provided ID is already assigned.')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(_email, _password)
        .then(() => {
          device.update({
            'assignedUser': _email
          })
          Alert.alert('Success', 'Account successfully created.', [
            {text: 'OK', onPress: () => navigation.navigate('SignIn')},
          ])
        })
    })
    .catch((error) => {
      alert(error.message)
    })
}
