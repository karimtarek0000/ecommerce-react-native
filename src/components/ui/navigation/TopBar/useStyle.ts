import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const { HS, VS } = scalingMethods

export const useStyles = () => {
  const colors = useTheme()
  const safeArea = useSafeAreaInsets()

  const styles = StyleSheet.create({
    safeAreaView: {
      paddingTop: safeArea.top,
      alignSelf: 'stretch',
    },
    wrapper: {
      height: VS(50),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.background.base,
    },
    title: {
      color: colors.forground.primary,
    },
    icon: {
      color: colors.forground.primary,
    },
    emptySpace: {
      width: HS(24),
    },
  })

  return styles
}
