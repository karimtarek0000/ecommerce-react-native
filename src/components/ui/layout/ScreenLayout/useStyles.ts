import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SIDE_PADDING, TOP_BAR_GAP } from './constant'
import { UseStylesScreenLayoutProps } from './types'

export const useStyles = ({ typePaddingSides, hasTopBar }: UseStylesScreenLayoutProps) => {
  const safeArea = useSafeAreaInsets()

  const paddingTop = hasTopBar ? 0 : safeArea.top
  const paddingBottom = hasTopBar ? 0 : safeArea.bottom
  const paddingSides = SIDE_PADDING[typePaddingSides]

  const styles = StyleSheet.create({
    viewWrapper: {
      paddingTop,
      paddingBottom,
      ...paddingSides,
      gap: TOP_BAR_GAP,
      flex: 1,
    },
  })

  return styles
}
