import { View } from 'react-native'
import DismissKeyboard from '../DismissKeyboard/DismissKeyboard'
import VerticalScrollView from '../VerticalScrollView/VerticalScrollView'
import { ScreenLayoutProps } from './types'
import { useStyles } from './useStyles'

const ScreenLayout = ({
  typePaddingSides = 'both',
  scrollable,
  scrollProps,
  dismissKeyboardOnTap = true,
  children,
  renderTopBar,
}: ScreenLayoutProps) => {
  const styles = useStyles({
    typePaddingSides,
    hasTopBar: !!renderTopBar,
  })

  if (scrollable) {
    return (
      <View style={styles.viewWrapper}>
        {renderTopBar?.()}
        <VerticalScrollView {...scrollProps}>{children}</VerticalScrollView>
      </View>
    )
  }

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>
        {renderTopBar?.()}

        {children}
      </DismissKeyboard>
    )
  }

  return (
    <View style={styles.viewWrapper}>
      {renderTopBar?.()}

      {children}
    </View>
  )
}

export default ScreenLayout
