import { StyleProp, ViewStyle } from 'react-native'

export type UseStylesProps = {
  isSelected: boolean
  disbaled?: boolean
}

export type RadioProps = UseStylesProps & {
  label: string
  onChange: () => void
  style?: StyleProp<ViewStyle>
}
