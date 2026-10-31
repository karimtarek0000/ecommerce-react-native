import { StyleProp, ViewStyle } from 'react-native'

export type RadioGroupOptions = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupProps = {
  options: RadioGroupOptions[]
  onValueChange: (text: string) => void
  selectedValue: string
  style?: StyleProp<ViewStyle>
}
