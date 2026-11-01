import { PressableProps, StyleProp, ViewStyle } from 'react-native'

export type UseStylesProps = {
  isSelected: boolean
  disbaled?: boolean
}

export type SwicthProps = UseStylesProps & {
  label: string
  onChange: VoidFunction
  style?: StyleProp<ViewStyle>
} & Omit<PressableProps, 'onPress'>
