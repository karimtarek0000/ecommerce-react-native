import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Variant } from './type'
const { HS, VS } = scalingMethods

export const useStyles = (variant: Variant) => {
  const colors = useTheme()

  const variants = {
    default: colors.forground.primary,
    danger: colors.danger.base,
  }

  const styles = StyleSheet.create({
    wrapper: {
      height: VS(48),
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: radius.sm,
      borderColor: colors.border.default,
      borderWidth: HS(1),
      paddingHorizontal: spacing.space16.width,
      backgroundColor: colors.background.base,
    },
    mainInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: HS(12),
    },
    trilingInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: HS(12),
      color: colors.forground.tertiary,
    },
  })

  return { styles, variants }
}
