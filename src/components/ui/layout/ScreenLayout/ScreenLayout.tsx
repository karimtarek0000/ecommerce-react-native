import DismissKeyboard from '../DismissKeyboard/DismissKeyboard'
import { ScreenLayoutProps } from './types'
import { useStyles } from './useStyles'

const ScreenLayout = ({ typePaddingSides = 'both', renderTopBar, children }: ScreenLayoutProps) => {
  const styles = useStyles({
    typePaddingSides,
    hasTopBar: !!renderTopBar,
  })

  return (
    <DismissKeyboard style={styles.wrapper}>
      {renderTopBar?.()}

      {children}
    </DismissKeyboard>
  )
}

export default ScreenLayout
