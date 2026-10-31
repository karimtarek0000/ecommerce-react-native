import { opacity, radius } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStylesProps } from './types'
const { HS, VS } = scalingMethods

export const useStyles = ({ isSelected, disabled }: UseStylesProps) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    view: {
      paddingHorizontal: HS(2),
      paddingVertical: VS(5),
      flexGrow: 1,
      alignItems: 'flex-start',
      opacity: disabled ? opacity.disabled : opacity.full,
      gap: VS(12),
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: HS(12),
    },
    wrapperIndicator: {
      width: HS(20),
      height: VS(20),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: HS(1),
      borderColor: colors.primary.base,
      borderRadius: radius.full,
    },
    indicator: {
      width: HS(10),
      height: VS(10),
      borderRadius: radius.full,
      backgroundColor: isSelected ? colors.primary.base : colors.background.base,
    },
    label: {
      color: colors.forground.primary,
    },
  })

  return styles
}
