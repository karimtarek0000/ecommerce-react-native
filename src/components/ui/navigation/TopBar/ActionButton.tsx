import Icon from '@/components/icons/Icon'
import { Pressable, View } from 'react-native'
import { ActionButtonProps } from './types'
import { useStyles } from './useStyle'

const ActionButton = ({ actionButton }: { actionButton: ActionButtonProps }) => {
  const styles = useStyles()

  if (!actionButton) {
    return <View />
  }

  return (
    <Pressable onPress={actionButton.onPress}>
      <Icon name={actionButton.iconName} color={styles.icon.color} flip={actionButton.flip} />
    </Pressable>
  )
}

export default ActionButton
