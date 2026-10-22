import { opacity, radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { type TypographyVariant } from '@/types'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStyles } from './types'
const { HS, VS } = scalingMethods

export const useStyles = ({ variant, size = 'lg', block, disabled }: UseStyles) => {
  const colors = useTheme()

  const colorsVariant = {
    primary: {
      typography: colors.forground.contrast,
      background: colors.primary.base,
      border: colors.primary.base,
    },
    link: {
      typography: colors.primary.base,
      background: colors.background.base,
      border: colors.background.base,
    },
    danger: {
      typography: colors.danger.base,
      background: colors.danger.tint,
      border: colors.danger.base,
    },
    ghost: {
      typography: colors.forground.primary,
      background: colors.background.base,
      border: colors.border.default,
    },
    chip: {
      typography: colors.primary.base,
      background: colors.background.base,
      border: colors.primary.base,
    },
  } as const

  const sizes = {
    height: {
      sm: VS(40),
      lg: VS(50),
    },
    paddingHorizontal: {
      sm: spacing.space16.width,
      lg: spacing.space24.width,
    },
    font: {
      sm: 'smallBold',
      lg: 'normalBold',
    },
  } as const

  const styles = StyleSheet.create({
    button: {
      height: sizes.height[size],
      alignSelf: block ? 'stretch' : 'auto',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.space8.width,
      borderWidth: HS(1),
      borderRadius: variant === 'chip' ? radius.full : radius.sm,
      paddingHorizontal: sizes.paddingHorizontal[size],
      backgroundColor: colorsVariant[variant].background,
      borderColor: colorsVariant[variant].border,
      opacity: disabled ? opacity.buttonDisabled : opacity.full,
    },
  })

  return {
    styles,
    fontSize: sizes.font[size] as TypographyVariant,
    typographyColor: colorsVariant[variant].typography,
  }
}
