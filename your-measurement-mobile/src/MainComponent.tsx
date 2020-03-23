// external libraries
import * as firebase from 'firebase'
import React from 'react'

// external components
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// own containers
import AuthLoadingScreen from './containers/AuthLoadingScreen'
import DevicesListScreen from './containers/DevicesListScreen'
import LoginScreen from './containers/LoginScreen'
import MeasurementsChartScreen from './containers/MeasurementsChartScreen'
import MeasurementsListScreen from './containers/MeasurementsListScreen'
import RegisterScreen from './containers/RegisterScreen'
import SettingsScreen from './containers/SettingsScreen'

// utilities
import { firebaseConfig } from './config/FirebaseConfig'

firebase.initializeApp(firebaseConfig)

const MainComponent: React.FC = () => {
  return <AppContainer />
}

// Navigation

// Authentication
const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    Register: RegisterScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#fc2570'
      }
    }
  }
)

// Devices
const DeviceTabNavigator = createBottomTabNavigator(
  {
    MeasurementsList: MeasurementsListScreen,
    MeasurementsChart: MeasurementsChartScreen
  },
  {
    tabBarOptions: {
      tabStyle: {
        width: 'auto'
      },
      style: {
        backgroundColor: '#fd7227'
      },
      activeTintColor: 'white'
    }
  }
)

const AppStack = createStackNavigator(
  {
    DevicesList: DevicesListScreen,
    DeviceDetails: DeviceTabNavigator,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#fc2570'
      }
    }
  }
)

// App Container
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)

export default MainComponent
