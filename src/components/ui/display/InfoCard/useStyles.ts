import { spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS } = scalingMethods

export const useStyles = (isSelected?: boolean) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      backgroundColor: colors.background.base,
      borderWidth: HS(1),
      borderColor: isSelected ? colors.primary.base : colors.border.default,
    },
    inforCardLeading: {},
    inforCardLeadingLabel: {
      color: colors.forground.primary,
    },
    inforCardLeadingDesc: {
      color: colors.forground.tertiary,
    },
  })

  return styles
}
