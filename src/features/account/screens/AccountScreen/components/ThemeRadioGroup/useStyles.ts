import { scalingMethods } from '@/utils'
import { StyleSheet } from 'react-native'
const { HS, VS } = scalingMethods

export const useStyles = () => {
  const styles = StyleSheet.create({
    imageWrapper: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    preview: {
      height: VS(156),
      width: HS(80),
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioGroup: {
      alignItems: 'center',
    },
  })

  return styles
}
