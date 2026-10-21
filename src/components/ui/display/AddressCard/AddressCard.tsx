import IconBadge from '../IconBadge/IconBadge'
import InfoCard from '../InfoCard/InfoCard'
import StatusBill from '../StatusBill/StatusBill'
import { AddressCardProps } from './types'

const AddressCard = ({
  isSelected,
  title,
  description,
  statusLabel,
  iconVariant = 'default',
  statusVariant,
  onPress,
  style,
}: AddressCardProps) => {
  return (
    <InfoCard onPress={onPress} isSelected={isSelected} style={style}>
      <InfoCard.Leading title={title} description={description} />
      <InfoCard.Trailing>
        <IconBadge iconName="mapPin" status={iconVariant} />
        <StatusBill label={statusLabel} size="sm" status={statusVariant} />
      </InfoCard.Trailing>
    </InfoCard>
  )
}

export default AddressCard
