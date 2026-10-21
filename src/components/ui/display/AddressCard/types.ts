import { StyleProp, ViewProps } from 'react-native'
import { Status } from '../IconBadge/types'
import { StatusBillStatus } from '../StatusBill/types'

export type AddressCardProps = {
  isSelected?: boolean
  title: string
  description: string
  statusLabel: string
  iconVariant?: Status
  statusVariant: StatusBillStatus
  onPress: VoidFunction
  style?: StyleProp<ViewProps>
}
