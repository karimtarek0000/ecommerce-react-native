import { StyleProp, ViewProps } from 'react-native'

export type AddressCardLabelTypes = 'home' | 'apartment' | 'office'

export type AddressCardProps = {
  isSelected?: boolean
  city: string
  address: string
  labelType?: AddressCardLabelTypes
  onPress: VoidFunction
  style?: StyleProp<ViewProps>
}
