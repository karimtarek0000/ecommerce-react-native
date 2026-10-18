import { IconName } from '@/components/icons/types'
import { Href } from 'expo-router'
import { StyleProp, ViewStyle } from 'react-native'

export type ActionButtonProps = { iconName: IconName; onPress: VoidFunction; flip?: boolean }

export type TopBarBaseProps = {
  title: string
  actionButton?: ActionButtonProps
  style?: StyleProp<ViewStyle>
}

export type GoToActionProps = {
  goTo: 'none' | 'back' | 'specific'
  toPage?: Href
}

export type TopBarProps = TopBarBaseProps &
  (
    | {
        goTo?: 'none' | 'back'
        toPage?: never
      }
    | {
        goTo: 'specific'
        toPage: Href
      }
  )
