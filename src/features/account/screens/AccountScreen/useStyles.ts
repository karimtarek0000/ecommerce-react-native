import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { VS } = scalingMethods

export const useStyles = () => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    // Navigation List Component
    headerTitle: {
      marginTop: VS(24),
      marginBottom: VS(16),
      color: colors.forground.primary,
    },
    rows: {
      gap: VS(16),
    },
    //
  })

  return styles
}
