import { spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS, VS } = scalingMethods

export const useStyles = () => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    head: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: VS(16),
    },
    title: {
      color: colors.forground.primary,
    },
    icon: {
      color: colors.forground.tertiary,
    },
    textBodyWrapper: {
      height: 0,
      borderBottomWidth: HS(1),
      borderBottomColor: colors.border.default,
      overflow: 'hidden',
    },
    textBodyWrapperActive: {
      height: 'auto',
      paddingBottom: spacing.space12.height,
    },
    textBody: {
      color: colors.forground.secondary,
      lineHeight: VS(20),
    },
  })

  return styles
}
