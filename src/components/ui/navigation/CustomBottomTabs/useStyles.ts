import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const { HS, VS } = scalingMethods

export const useStyles = (isFocused?: boolean) => {
  const colors = useTheme()
  const safeArea = useSafeAreaInsets()

  const colorsForFocused = isFocused ? colors.primary.base : colors.forground.tertiary

  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: colors.background.base,
      paddingBottom: VS(safeArea.bottom),
    },
    tabsWrapper: {
      height: VS(70),
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
    },
    tabButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabItem: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.space8.height,
      borderTopWidth: HS(2),
      borderTopColor: isFocused ? colors.primary.base : 'transparent',
      paddingVertical: spacing.space12.height,
      width: '80%',
    },
    tabIcon: {
      position: 'relative',
    },
    tabBadge: {
      position: 'absolute',
      width: HS(21),
      height: VS(21),
      justifyContent: 'center',
      alignItems: 'center',
      top: VS(-10),
      right: HS(-13),
      backgroundColor: colors.danger.base,
      borderRadius: radius.full,
    },
    //
    tabBadgeColor: {
      color: colors.forground.contrast,
    },
    tabOtherColor: {
      color: colorsForFocused,
    },
  })

  return styles
}
