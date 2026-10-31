import { ImageProps } from 'expo-image'
import { StyleProp, ViewStyle } from 'react-native'

export type RadioGroupOptions = {
  label: string
  value: string
  img?: ImageProps['source']
  disabled?: boolean
}

export type FlexDirections = 'row' | 'column'

export type RadioGroupProps = {
  options: RadioGroupOptions[]
  onValueChange: (text: string) => void
  selectedValue: string
  children?: (data: RadioGroupOptions) => React.JSX.Element
  direction?: FlexDirections
  style?: StyleProp<ViewStyle>
}
