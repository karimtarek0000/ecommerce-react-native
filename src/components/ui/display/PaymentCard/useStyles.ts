import { useTheme } from '@/hooks'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS, VS } = scalingMethods

export const useStyles = (isSelected?: boolean) => {
  const colors = useTheme()

  const styles = StyleSheet.create({
    wrapper: {},
  })

  return styles
}
