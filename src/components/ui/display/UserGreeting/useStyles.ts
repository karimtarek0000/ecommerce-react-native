import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { TypographyVariant } from '@/types'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Sizes } from './type'
const { HS } = scalingMethods

export const useStyles = (size: Sizes) => {
  const colors = useTheme()

  const fontsSizes: Record<Sizes, TypographyVariant> = {
    sm: 'normalBold',
    md: 'mediumBold',
  }

  const metaColors = {
    sm: colors.forground.secondary,
    md: colors.forground.tertiary,
  }

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      gap: HS(12),
      backgroundColor: colors.background.base,
      borderRadius: radius.sm,
      paddingVertical: spacing.space4.height,
    },
    body: {
      alignSelf: 'flex-start',
    },
    //
    userName: {
      color: colors.forground.primary,
    },
    meta: {
      color: metaColors[size],
      lineHeight: 0,
    },
  })

  return { styles, fontsSizes }
}
