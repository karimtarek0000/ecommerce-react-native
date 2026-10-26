import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SIDE_PADDING, TOP_BAR_GAP } from './constant'
import { UseStylesScreenLayoutProps } from './types'

export const useStyles = ({ typePaddingSides, hasTopBar }: UseStylesScreenLayoutProps) => {
  const safeArea = useSafeAreaInsets()

  const paddingTop = hasTopBar ? 0 : safeArea.top
  const paddingSides = SIDE_PADDING[typePaddingSides]

  const styles = StyleSheet.create({
    wrapper: {
      paddingTop,
      ...paddingSides,
      gap: TOP_BAR_GAP,
    },
  })

  return styles
}
