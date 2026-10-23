import { radius, spacing } from '@/constants'
import { useFontStyle, useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { Platform, StyleSheet } from 'react-native'
import { StatusTypes } from './sharedTypes'
const { HS, VS } = scalingMethods

const andriod = Platform.OS === 'android'

export const useSharedStyles = (currentStatusInput?: StatusTypes) => {
  const colors = useTheme()
  const fontsFamily = useFontStyle()

  const colorsVariants = {
    border: {
      default: colors.border.default,
      focused: colors.primary.base,
      filled: colors.border.default,
      error: colors.danger.base,
    },
    icon: {
      default: colors.forground.tertiary,
      focused: colors.primary.base,
      filled: colors.primary.base,
      error: colors.danger.base,
    },
  }

  const styles = StyleSheet.create({
    wrapper: {
      alignSelf: 'stretch',
    },
    label: {
      color: colors.forground.primary,
      marginBottom: spacing.space4.height,
    },
    fieldWrapper: {
      height: VS(52),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: radius.sm,
      backgroundColor: colors.background.base,
      borderWidth: HS(1),
      borderColor: colorsVariants.border[currentStatusInput || 'default'],
      gap: spacing.space8.width,
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
    },
    icon: {
      color: colorsVariants.icon[currentStatusInput || 'default'],
    },
    errorMessage: {
      color: colors.danger.base,
      marginTop: spacing.space8.height,
    },
    // Text input
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
    iconAction: {
      color: colors.forground.tertiary,
    },
    placeholder: {
      color: colors.forground.tertiary,
    },
    // Select Input
    selectWrapper: {
      alignSelf: 'stretch',
    },
    selectText: {
      flex: 1,
    },
    selectTextEmpty: {
      color: colors.forground.tertiary,
    },
    selectTextValue: {
      color: colors.forground.primary,
    },
    // Options for select input
    optionSelectItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: HS(47),
      borderWidth: HS(1),
      borderColor: 'transparent',
    },
    optionSelectItemSelected: {
      borderBottomColor: colors.primary.base,
      borderTopColor: colors.primary.base,
    },
    optionText: {
      color: colors.forground.primary,
    },
    optionTextSelected: {
      color: colors.primary.base,
    },
    optionCheckIcon: {
      color: colors.primary.base,
    },
  })

  return styles
}
