import { spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { VS } = scalingMethods

export const useStyles = () => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      height: VS(50),
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      backgroundColor: colors.background.base,
      paddingHorizontal: spacing.space16.width,
    },
    title: {
      color: colors.forground.primary,
    },
    icon: {
      color: colors.forground.primary,
    },
  })

  return styles
}
