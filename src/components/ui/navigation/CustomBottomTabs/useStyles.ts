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
      flexDirection: 'row',
      alignSelf: 'stretch',
      height: VS(70),
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
    },
    tabItem: {
      flex: 1,
    },
    tabContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabColor: {
      color: colorsForFocused,
    },
  })

  return styles
}
