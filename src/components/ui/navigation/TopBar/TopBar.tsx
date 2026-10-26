import { Typography } from '@/components/ui/display'
import { View } from 'react-native'
import ActionButton from './ActionButton'
import GoToAction from './GoToAction'
import { ActionButtonProps, TopBarProps } from './types'
import { useStyles } from './useStyle'

const TopBar = ({ title, actionButton, goTo = 'none', toPage }: TopBarProps) => {
  const styles = useStyles()

  return (
    <View style={styles.safeAreaView}>
      <View style={styles.wrapper}>
        <GoToAction goTo={goTo} toPage={toPage} />

        <Typography variant="normalBold" color={styles.title.color} textTransform="capitalize">
          {title}
        </Typography>

        <ActionButton actionButton={{ ...(actionButton as ActionButtonProps) }} />
      </View>
    </View>
  )
}

export default TopBar
