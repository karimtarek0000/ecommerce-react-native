import { View } from 'react-native'
import DismissKeyboard from '../DismissKeyboard/DismissKeyboard'
import VerticalScrollView from '../VerticalScrollView/VerticalScrollView'
import { ScreenLayoutProps } from './types'
import { useStyles } from './useStyles'

const ScreenLayout = ({
  typePaddingSides = 'both',
  scrollable,
  scrollProps,
  children,
  renderTopBar,
}: ScreenLayoutProps) => {
  const styles = useStyles({
    typePaddingSides,
    hasTopBar: !!renderTopBar,
  })

  if (scrollable) {
    return (
      <View style={[styles.viewWrapper, styles.scrollViewWrapper]}>
        {renderTopBar?.()}

        <DismissKeyboard>
          <VerticalScrollView {...scrollProps}>{children}</VerticalScrollView>
        </DismissKeyboard>
      </View>
    )
  }

  return (
    <View style={styles.viewWrapper}>
      {renderTopBar?.()}

      <DismissKeyboard>{children}</DismissKeyboard>
    </View>
  )
}

export default ScreenLayout
