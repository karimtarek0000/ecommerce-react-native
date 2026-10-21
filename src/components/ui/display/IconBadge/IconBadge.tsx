import Icon from '@/components/icons/Icon'
import { View } from 'react-native'
import { IconBadgeProps } from './types'
import { useStyles } from './useStyles'

const IconBadge = ({ status = 'default', iconName, style }: IconBadgeProps) => {
  const styles = useStyles(status)

  return (
    <View style={[styles.wrapper, style]}>
      <Icon name={iconName} color={styles.icon.color} />
    </View>
  )
}

export default IconBadge
