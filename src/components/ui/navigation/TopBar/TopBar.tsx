import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import GoToAction from './GoToAction'
import { TopBarProps } from './type'
import { useStyles } from './useStyle'

const TopBar = ({ title, actionButton, style, goTo = 'none', toPage }: TopBarProps) => {
  const styles = useStyles()

  return (
    <View style={[styles.wrapper, style]}>
      <GoToAction goTo={goTo} toPage={toPage} />

      <Typography variant="normalBold" color={styles.title.color} textTransform="capitalize">
        {title}
      </Typography>

      {actionButton ? (
        <Pressable onPress={actionButton.onPress}>
          <Icon name={actionButton?.iconName} color={styles.icon.color} flip={actionButton.flip} />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  )
}

export default TopBar
