import { StyleProp, ViewProps } from 'react-native'

export type PaymentCardProps = {
  onPress: VoidFunction
  isSelected?: boolean
  expiryDate: string
  cardType: 'visa' | 'mastercard'
  cardNumber: number | string
  style?: StyleProp<ViewProps>
}
