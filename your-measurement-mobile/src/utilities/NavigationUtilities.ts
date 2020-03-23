// external libraries
import { useContext } from 'react'
import {
  NavigationContext,
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

export type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

export function useNavigation<Params>() {
  return useContext(NavigationContext) as NavigationScreenProp<
    NavigationRoute,
    Params
  >
}
