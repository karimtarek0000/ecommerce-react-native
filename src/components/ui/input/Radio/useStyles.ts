import { opacity, radius } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStylesProps } from './types'
const { HS, VS } = scalingMethods

export const useStyles = ({ isSelected, disbaled }: UseStylesProps) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row-reverse',
      gap: 4,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: HS(2),
      paddingVertical: VS(2),
    },
    wrapper: {
      width: HS(20),
      height: VS(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: HS(1),
      borderColor: colors.primary.base,
      borderRadius: radius.full,
      opacity: disbaled ? opacity.disabled : opacity.full,
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
