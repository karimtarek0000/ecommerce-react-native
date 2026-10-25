import { ColorValue, StyleProp, ViewStyle } from 'react-native'
import { iconMapper } from './components/iconMapper'

export type IconProps = {
  size?: number
  color?: ColorValue
  style?: StyleProp<ViewStyle>
}

export type IconRenderProps = {
  name: IconName
  flip?: boolean
} & IconProps

export type IconName = keyof typeof iconMapper
