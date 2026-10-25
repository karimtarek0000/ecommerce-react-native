import { spacing } from '@/constants'
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
      flexDirection: 'row',
      backgroundColor: colors.background.base,
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
      paddingHorizontal: spacing.space8.width,
    },
    tabItem: {
      flexGrow: 1,
    },
    tabContent: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.space20.width,
      gap: spacing.space8.height,
    },
    tabColor: {
      color: colorsForFocused,
    },
  })

  return styles
}
