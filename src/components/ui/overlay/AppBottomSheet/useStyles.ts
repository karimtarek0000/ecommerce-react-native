import { opacity, radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS, VS } = scalingMethods

export const useStyles = () => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: colors.background.overlay,
    },
    bottomSheetHead: {
      paddingTop: spacing.space16.height,
    },
    indicator: {
      width: HS(48),
      height: VS(5),
      borderRadius: radius.full,
      backgroundColor: colors.border.default,
    },
    bottomSheet: {
      backgroundColor: colors.background.base,
      borderRadius: radius.sheet,
      paddingHorizontal: spacing.space24.width,
      shadowColor: colors.misc.shadow,
      shadowOffset: {
        width: 0,
        height: -VS(4),
      },
      shadowOpacity: opacity.overlay,
      shadowRadius: HS(16),
      elevation: 8,
    },
    //
    wrapper: {
      height: '100%',
      paddingHorizontal: spacing.space12.width,
    },
    bottomSheetHeadWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.space8.height,
      paddingVertical: spacing.space16.height,
    },
    bottomSheetLabel: {
      color: colors.forground.primary,
    },
    bottomSheetDesc: {
      color: colors.forground.secondary,
    },
    //
    content: {
      // flex: 1,
      marginBottom: VS(20),
    },
  })

  return styles
}
