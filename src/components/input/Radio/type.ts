import { StyleProp, ViewStyle } from 'react-native'

export type UseStylesProps = {
  isActive: boolean
  disbaled?: boolean
}

export type RadioProps = UseStylesProps & {
  onChange: () => void
  style?: StyleProp<ViewStyle>
  label?: string
}
