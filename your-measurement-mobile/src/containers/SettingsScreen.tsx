// external libraries
import React from 'react'
import { NavigationParams } from 'react-navigation'

// own components
import SettingsList from '../components/SettingsList'

// utilities
import { Navigation, useNavigation } from '../utilities/NavigationUtilities'

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationParams>()

  return <SettingsList navigation={navigation} />
}

SettingsScreen.navigationOptions = ({
  navigation
}: {
  navigation: Navigation
}) => ({
  title: 'Settings'
})

export default SettingsScreen
