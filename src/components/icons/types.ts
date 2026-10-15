import { StyleProp, ViewStyle } from 'react-native'
import { iconMapper } from './components/iconMapper'

export type IconProps = {
  size: number
  color?: string
  style?: StyleProp<ViewStyle>
}

export type IconRenderProps = {
  name: IconsNames
  isRTL?: boolean
} & IconProps

export type IconsNames = keyof typeof iconMapper
