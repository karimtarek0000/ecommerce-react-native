import { radius, spacing } from '@/constants'
import { useFontStyle, useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { Platform, StyleSheet } from 'react-native'
import { StatusTypes } from './type'
const { HS, VS } = scalingMethods

export const useStyles = (currentStatusInput?: StatusTypes) => {
  const colors = useTheme()
  const fontsFamily = useFontStyle()

  const andriod = Platform.OS === 'android'

  const borderVariants = {
    default: colors.border.default,
    focused: colors.primary.base,
    filled: colors.border.default,
    error: colors.danger.base,
  }

  const iconVariants = {
    default: colors.forground.tertiary,
    focused: colors.primary.base,
    filled: colors.primary.base,
    error: colors.danger.base,
  }

  const styles = StyleSheet.create({
    wrapper: {
      alignSelf: 'stretch',
    },
    label: {
      color: colors.forground.primary,
      marginBottom: spacing.space4.height,
    },
    inputWrapper: {
      height: VS(52),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: radius.sm,
      backgroundColor: colors.background.base,
      borderWidth: HS(1),
      borderColor: borderVariants[currentStatusInput || 'default'],
      gap: spacing.space8.width,
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
    },
    textInput: {
      ...fontsFamily.smallRegular,
      color: colors.forground.primary,
      alignSelf: 'stretch',
      flex: 1,
      lineHeight: andriod ? fontsFamily.smallRegular.lineHeight : 0,
      textAlign: 'left',
      textAlignVertical: 'center',
      paddingVertical: 0,
      writingDirection: 'ltr',
      includeFontPadding: false,
    },
    //
    icon: {
      color: iconVariants[currentStatusInput || 'default'],
    },
    iconsClose: {
      color: colors.forground.tertiary,
    },
    placeholder: {
      color: colors.forground.tertiary,
    },
    errorMessage: {
      color: colors.danger.base,
      marginTop: spacing.space8.height,
    },
  })

  return styles
}
