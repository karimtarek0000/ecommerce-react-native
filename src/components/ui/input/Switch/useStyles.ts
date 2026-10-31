import { opacity, radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStylesProps } from './types'
const { HS, VS } = scalingMethods

export const useStyles = ({ isSelected, disbaled }: UseStylesProps) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: HS(12),
      paddingHorizontal: HS(2),
      paddingVertical: VS(2),
    },
    wrapper: {
      width: HS(36),
      height: VS(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: isSelected ? 'flex-end' : 'flex-start',
      backgroundColor: isSelected ? colors.primary.base : colors.border.default,
      borderRadius: radius.full,
      paddingHorizontal: spacing.space4.width,
      opacity: disbaled ? opacity.disabled : opacity.full,
    },
    indicator: {
      width: HS(16),
      height: VS(16),
      borderRadius: radius.full,
      backgroundColor: colors.background.card,
    },
  })

  return styles
}
