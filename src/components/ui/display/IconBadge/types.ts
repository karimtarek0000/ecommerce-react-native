import { IconName } from '@/components/icons/types'
import { StyleProp, ViewProps } from 'react-native'

export type IconBadgeStatus = 'default' | 'warning' | 'success'

export type IconBadgeProps = {
  status?: IconBadgeStatus
  iconName: IconName
  style?: StyleProp<ViewProps>
}
