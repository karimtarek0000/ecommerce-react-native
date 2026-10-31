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
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingHorizontal: HS(2),
      paddingVertical: VS(2),
      opacity: disabled ? opacity.disabled : opacity.full,
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
  })

  return styles
}
