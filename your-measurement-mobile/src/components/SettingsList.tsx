// external libraries
import React from 'react'

// external components
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// utilities
import { Navigation } from '../utilities/NavigationUtilities'
import { signOut } from '../utilities/signOut'

interface SettingsListParams {
  navigation: Navigation
}

const SettingsList: React.FC<SettingsListParams> = props => {
  return (
    <LinearGradient
      colors={['#fc2570', '#fd7227']}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.gradientField}
    >
      <ScrollView>
        <TouchableOpacity
          onPress={() => signOut(props.navigation)}
          style={styles.optionButton}
        >
          <Text style={styles.optionText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradientField: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  optionButton: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  optionText: {
    fontSize: 20,
    color: 'white'
  }
})

export default SettingsList
