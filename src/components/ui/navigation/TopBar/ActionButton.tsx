import Icon from '@/components/icons/Icon'
import { Pressable, View } from 'react-native'
import { ActionButtonProps } from './type'
import { useStyles } from './useStyle'

const ActionButton = ({ iconName, onPress, flip }: ActionButtonProps) => {
  const styles = useStyles()

  if (iconName) {
    return <View />
  }

  return (
    <Pressable onPress={onPress}>
      <Icon name={iconName} color={styles.icon.color} flip={flip} />
    </Pressable>
  )
}

export default ActionButton
