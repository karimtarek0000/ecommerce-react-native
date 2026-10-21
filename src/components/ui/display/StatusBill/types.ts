import { IconName } from '@/components/icons/types'
import { StyleProp, ViewProps } from 'react-native'

export type StatusBillStatus = 'pending' | 'onProgress' | 'cancelled' | 'completed'

export type StatusBillProps = {
  label: string
  iconName?: IconName
  status: StatusBillStatus
  size?: 'sm' | 'lg'
  variant?: 'fill' | 'outline'
  style?: StyleProp<ViewProps>
}
