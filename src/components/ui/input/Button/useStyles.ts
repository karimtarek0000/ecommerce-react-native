import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { type TypographyVariant } from '@/types'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStyles } from './types'
const { HS, VS } = scalingMethods

export const useStyles = ({ variant, size = 'lg', block, disabled }: UseStyles) => {
  const colors = useTheme()

  const fontVariant: Record<string, TypographyVariant> = {
    sm: 'smallBold',
    lg: 'normalBold',
  }

  const heightButton = {
    sm: VS(40),
    lg: VS(50),
  }

  const paddingHorizontalButton = {
    sm: spacing.space16.width,
    lg: spacing.space24.width,
  }

  const typographyColorVariant = {
    primary: colors.forground.contrast,
    link: colors.primary.base,
    chip: colors.primary.base,
    ghost: colors.forground.primary,
    danger: colors.danger.base,
  }

  const backgroundColorVariant = {
    primary: colors.primary.base,
    link: colors.background.base,
    chip: colors.background.base,
    ghost: colors.background.base,
    danger: colors.danger.tint,
  }

  const borderColorVariant = {
    primary: colors.primary.base,
    link: colors.background.base,
    chip: colors.primary.base,
    ghost: colors.border.default,
    danger: colors.danger.base,
  }

  const styles = StyleSheet.create({
    button: {
      height: heightButton[size],
      alignSelf: block ? 'stretch' : 'auto',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.space8.width,
      borderWidth: HS(1),
      borderRadius: variant === 'chip' ? radius.full : radius.sm,
      paddingHorizontal: paddingHorizontalButton[size],
      backgroundColor: backgroundColorVariant[variant],
      borderColor: borderColorVariant[variant],
      opacity: disabled ? 0.7 : 1,
    },
  })

  return { styles, fontVariant: fontVariant[size], typographyColorVariant }
}
