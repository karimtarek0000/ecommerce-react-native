import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStylesProps } from './type'
const { HS, VS } = scalingMethods

export const useStyles = ({ isActive, disbaled }: UseStylesProps) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      width: HS(36),
      height: VS(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: isActive ? 'flex-end' : 'flex-start',
      backgroundColor: isActive ? colors.primary.base : colors.border.default,
      borderRadius: radius.full,
      paddingHorizontal: spacing.space4.width,
      opacity: disbaled ? 0.4 : 1,
    },
    indicator: {
      width: HS(16),
      height: VS(16),
      borderRadius: radius.full,
      backgroundColor: colors.background.card,
    },
    view: { flexDirection: 'row-reverse', gap: 4 },
  })

  return styles
}
