// external components
import { Alert, AsyncStorage } from 'react-native'

// utilities
import { Navigation } from './NavigationUtilities'

export const signOut = (navigation: Navigation) => {
  Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
    {
      text: 'Yes',
      onPress: async () => {
        await AsyncStorage.removeItem('userToken')
        navigation.navigate('Auth')
      },
    },
    {
      text: 'No',
    },
  ])
}
