import { useTheme } from '@/hooks'
import { TypographyVariant } from '@/types'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Sizes } from './types'
const { HS } = scalingMethods

export const useStyles = (size: Sizes) => {
  const colors = useTheme()

  const fontsSizes: Record<Sizes, TypographyVariant> = {
    sm: 'normalBold',
    md: 'mediumBold',
  } as const

  const metaColors = {
    sm: colors.forground.secondary,
    md: colors.forground.tertiary,
  } as const

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      gap: HS(12),
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
