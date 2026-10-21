import { radius } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { IconBadgeStatus } from './types'
const { HS, VS } = scalingMethods

export const useStyles = (status: IconBadgeStatus) => {
  const colors = useTheme()

  const statusColors: Record<IconBadgeStatus, string> = {
    default: colors.primary.pressed,
    warning: colors.warning.base,
    success: colors.success.strong,
  }

  const styles = StyleSheet.create({
    wrapper: {
      width: HS(45),
      height: VS(45),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: radius.full,
      backgroundColor: colors.background.surface,
    },
    icon: {
      color: statusColors[status],
    },
  })

  return styles
}
