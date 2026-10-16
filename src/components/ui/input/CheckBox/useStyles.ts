import { radius } from '@/constants'
import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
import { UseStylesProps } from './type'
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
      borderWidth: HS(1.5),
      borderRadius: radius.xs,
      backgroundColor: isSelected ? colors.primary.base : colors.background.base,
      borderColor: isSelected ? colors.primary.base : colors.border.default,
      opacity: disbaled ? 0.6 : 1,
    },
    indicator: {
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isSelected ? 1 : 0,
    },
  })

  return styles
}
