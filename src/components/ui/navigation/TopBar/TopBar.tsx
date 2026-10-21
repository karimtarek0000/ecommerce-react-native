import { Typography } from '@/components/ui/display'
import { View } from 'react-native'
import ActionButton from './ActionButton'
import GoToAction from './GoToAction'
import { ActionButtonProps, TopBarProps } from './types'
import { useStyles } from './useStyle'

const TopBar = ({ title, actionButton, style, goTo = 'none', toPage }: TopBarProps) => {
  const styles = useStyles()

  return (
    <View style={[styles.wrapper, style]}>
      <GoToAction goTo={goTo} toPage={toPage} />

      <Typography variant="normalBold" color={styles.title.color} textTransform="capitalize">
        {title}
      </Typography>

      <ActionButton actionButton={{ ...(actionButton as ActionButtonProps) }} />
    </View>
  )
}

export default TopBar
