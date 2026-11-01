import { StyleProp, ViewStyle } from 'react-native'

export type SwitchGroupOptions = {
  label: string
  value: string
  isSelected: boolean
  disabled?: boolean
}

export type SwitchGroupProps = {
  options: SwitchGroupOptions[]
  onValueChange: (text: string) => void
  style?: StyleProp<ViewStyle>
}
