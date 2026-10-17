import { radius, spacing } from '@/constants'
import { useFontStyle, useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { StatusTypes } from './type'
const { HS, VS } = scalingMethods

export const useStyles = (currentStatusInput: StatusTypes) => {
  const colors = useTheme()
  const fontsFamily = useFontStyle()

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
    },
    inputWrapper: {
      height: VS(52),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: radius.sm,
      backgroundColor: colors.background.base,
      borderWidth: HS(1),
      borderColor: borderVariants[currentStatusInput],
      gap: spacing.space8.width,
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
    },
    textInput: {
      ...fontsFamily.smallRegular,
      alignSelf: 'stretch',
      flex: 1,
      lineHeight: 0,
    },
    //
    icon: {
      color: iconVariants[currentStatusInput],
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
