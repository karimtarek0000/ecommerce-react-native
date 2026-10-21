import { IconName } from '@/components/icons/types'
import { StyleProp, ViewProps } from 'react-native'

export type Status = 'default' | 'warning' | 'success'

export type IconBadgeProps = {
  status?: Status
  iconName: IconName
  style?: StyleProp<ViewProps>
}
