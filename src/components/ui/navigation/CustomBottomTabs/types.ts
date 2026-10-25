import { IconName } from '@/components/icons/types'
import { TabTriggerSlotProps } from 'expo-router/ui'

export type CustomBottomTabProps = TabTriggerSlotProps & {
  label: string
  iconName: IconName
  badge?: number
  isFocused?: boolean
}
