import { StyleProp, ViewStyle } from 'react-native'
import { iconMapper } from './components/iconMapper'

export type IconProps = {
  size?: number
  color?: string
  style?: StyleProp<ViewStyle>
}

export type IconRenderProps = {
  name: IconName
  isRTL?: boolean
} & IconProps

export type IconName = keyof typeof iconMapper
