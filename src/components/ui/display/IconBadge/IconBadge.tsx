import Icon from '@/components/icons/Icon'
import { View } from 'react-native'
import { IconBadgeProps } from './type'
import { useStyles } from './useStyles'

const IconBadge = ({ status = 'default', iconName }: IconBadgeProps) => {
  const styles = useStyles(status)

  return (
    <View style={styles.wrapper}>
      <Icon name={iconName} color={styles.icon.color} />
    </View>
  )
}

export default IconBadge
