import { StyleSheet } from 'react-native'
import { FlexDirections } from './types'

export const useStyles = (direction: FlexDirections) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: direction === 'row' ? 'row' : 'column',
    },
  })

  return styles
}
