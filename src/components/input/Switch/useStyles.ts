import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStylesProps } from './type'
const { HS, VS } = scalingMethods

export const useStyles = ({ isSelected, disbaled }: UseStylesProps) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row-reverse',
      gap: 4,
      justifyContent: 'center',
      alignItems: 'center',
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
      opacity: disbaled ? 0.6 : 1,
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
