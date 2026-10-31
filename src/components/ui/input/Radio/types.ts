import { PressableProps, StyleProp, ViewStyle } from 'react-native'

export type UseStylesProps = {
  isSelected: boolean
  disabled?: boolean
}

export type RadioProps = UseStylesProps & {
  label: string
  onChange: VoidFunction
  style?: StyleProp<ViewStyle>
} & Omit<PressableProps, 'onPress'>
