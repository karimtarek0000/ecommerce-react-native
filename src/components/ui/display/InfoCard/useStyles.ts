import { radius, spacing } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS, VS } = scalingMethods

export const useStyles = (isSelected?: boolean) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      height: VS(96),
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing.space12.width,
      paddingVertical: spacing.space12.height,
      backgroundColor: colors.background.base,
      borderRadius: radius.lg,
      borderWidth: HS(1),
      borderColor: isSelected ? colors.primary.base : colors.border.default,
      gap: HS(20),
    },
    infoCardLeading: {
      alignItems: 'flex-start',
      flexShrink: 1,
    },
    infoCardLeadingLabel: {
      color: colors.forground.primary,
    },
    infoCardLeadingDesc: {
      color: colors.forground.tertiary,
    },
    infoCardTrailing: {
      alignItems: 'flex-end',
      gap: VS(3),
    },
  })

  return styles
}
