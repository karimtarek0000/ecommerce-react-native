import { opacity, radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS, VS } = scalingMethods

export const useStyles = () => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    backdrop: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background.overlay,
      paddingHorizontal: spacing.space24.width,
    },
    wrapperModal: {
      alignSelf: 'stretch',
      backgroundColor: colors.background.base,
      borderRadius: radius.xl,
      paddingVertical: spacing.space24.height,
      paddingHorizontal: spacing.space24.width,
      shadowColor: colors.misc.shadow,
      shadowOffset: {
        width: 0,
        height: VS(8),
      },
      shadowOpacity: opacity.overlay,
      elevation: 8,
    },
    contentHeader: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      height: VS(32),
      width: HS(32),
      position: 'absolute',
      top: spacing.space12.height,
      right: spacing.space12.width,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: radius.full,
      backgroundColor: colors.background.surface,
    },
    //
    icon: {
      color: colors.forground.primary,
    },
    headTitle: {
      color: colors.forground.primary,
    },
    headDesc: {
      color: colors.forground.secondary,
    },
  })

  return styles
}
