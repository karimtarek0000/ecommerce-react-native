import Icon from '@/components/icons/Icon'
import Typography from '../Typography/Typography'
import { View } from 'react-native'
import { StatusBillProps } from './type'
import { useStyles } from './useStyles'

const StatusBill = ({
  label,
  iconName,
  status,
  size = 'lg',
  variant = 'fill',
}: StatusBillProps) => {
  const { styles, fontsSizes } = useStyles({ status, size, variant })

  return (
    <View style={styles.wrapper}>
      {iconName && (
        <Icon name={iconName} size={size === 'lg' ? 16 : 12} color={styles.other.color} />
      )}
      <Typography variant={fontsSizes[size]} color={styles.other.color}>
        {label}
      </Typography>
    </View>
  )
}

export default StatusBill
