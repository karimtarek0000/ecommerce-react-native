import { IconName } from '@/components/icons/types'

export type Status = 'default' | 'warning' | 'success'
export type IconBadgeProps = {
  status?: Status
  iconName: IconName
}
