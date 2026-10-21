import { IconName } from '@/components/icons/types'
import { StyleProp, ViewProps } from 'react-native'

export type StatusBillProps = {
  label: string
  iconName?: IconName
  status: 'pending' | 'onProgress' | 'cancelled' | 'complete'
  size?: 'sm' | 'lg'
  variant?: 'fill' | 'outline'
  style?: StyleProp<ViewProps>
}
