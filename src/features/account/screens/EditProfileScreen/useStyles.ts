import { spacing } from '@/constants'
import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { VS } = scalingMethods

export const useStyles = () => {
  const styles = StyleSheet.create({
    form: {
      marginTop: VS(24),
      gap: spacing.space8.height,
    },
    submitBTN: {
      marginTop: 'auto',
    },
  })

  return styles
}
