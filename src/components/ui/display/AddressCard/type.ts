import { StyleProp, ViewProps } from 'react-native'
import { Status } from '../IconBadge/type'
import { StatusBillStatus } from '../StatusBill/type'

export type AddressCardProps = {
  isSelected?: boolean
  title: string
  description: string
  statusLabel: string
  iconVariant: Status
  statusVariant: StatusBillStatus
  onPress: VoidFunction
  style?: StyleProp<ViewProps>
}
