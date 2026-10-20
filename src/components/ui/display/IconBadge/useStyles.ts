import { radius } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Status } from './type'
const { HS, VS } = scalingMethods

export const useStyles = (status: Status) => {
  const colors = useTheme()

  const statusColors: Record<Status, string> = {
    default: colors.primary.pressed,
    warning: colors.warning.base,
    success: colors.success.strong,
  }

  const styles = StyleSheet.create({
    wrapper: {
      width: HS(45),
      height: VS(45),
      borderRadius: radius.full,
      backgroundColor: colors.background.surface,
    },
    icon: {
      color: statusColors[status],
    },
  })

  return styles
}
