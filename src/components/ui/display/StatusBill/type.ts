import { IconName } from '@/components/icons/types'

export type StatusBillProps = {
  label: string
  iconName?: IconName
  status: 'pending' | 'onProgress' | 'cancelled' | 'complete'
  size?: 'sm' | 'lg'
  variant?: 'fill' | 'outline'
}
