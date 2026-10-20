import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { TypographyVariant } from '@/types'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { Sizes } from './type'
const { HS, VS } = scalingMethods

export const useStyles = (size: Sizes) => {
  const colors = useTheme()

  const sizes = {
    sm: {
      width: HS(44),
      height: VS(44),
    },
    md: {
      width: HS(60),
      height: VS(60),
    },
  }

  const fontsSizes: Record<Sizes, TypographyVariant> = {
    sm: 'normalBold',
    md: 'mediumBold',
  }

  const emailColors = {
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
    image: {
      width: sizes[size].width,
      height: sizes[size].height,
      borderRadius: radius.full,
    },
    body: {
      alignSelf: 'flex-start',
    },
    //
    userName: {
      color: colors.forground.primary,
    },
    email: {
      color: emailColors[size],
      lineHeight: 0,
    },
  })

  return { styles, fontsSizes }
}
