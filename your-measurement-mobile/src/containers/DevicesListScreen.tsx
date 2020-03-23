// external libraries
import React from 'react'
import { NavigationParams } from 'react-navigation'

// external components
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

// own components
import DevicesList from '../components/DevicesList'

// utilities
import { Navigation, useNavigation } from '../utilities/NavigationUtilities'

const DevicesListScreen = () => {
  const navigation = useNavigation<NavigationParams>()

  return <DevicesList navigation={navigation} />
}

DevicesListScreen.navigationOptions = ({
  navigation
}: {
  navigation: Navigation
}) => ({
  title: 'Devices',
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Text style={{ color: '#fff', fontSize: 18, paddingHorizontal: 8 }}>
        Settings
      </Text>
    </TouchableOpacity>
  )
})

export default DevicesListScreen
