import IconBadge from '../IconBadge/IconBadge'
import { IconBadgeStatus } from '../IconBadge/types'
import InfoCard from '../InfoCard/InfoCard'
import StatusBill from '../StatusBill/StatusBill'
import { StatusBillStatus } from '../StatusBill/types'
import { AddressCardLabelTypes, AddressCardProps } from './types'

const statusBillVariant: Record<AddressCardLabelTypes, StatusBillStatus> = {
  home: 'onProgress',
  apartment: 'pending',
  office: 'completed',
}

const statusIconBadgeVariant: Record<AddressCardLabelTypes, IconBadgeStatus> = {
  home: 'default',
  apartment: 'success',
  office: 'warning',
}

const AddressCard = ({
  isSelected,
  city,
  address,
  labelType = 'home',
  onPress,
  style,
}: AddressCardProps) => {
  const fullAddress = `${city}, ${address}`

  return (
    <InfoCard onPress={onPress} isSelected={isSelected} style={style}>
      <InfoCard.Leading title={city} description={fullAddress} />
      <InfoCard.Trailing>
        <IconBadge iconName="mapPin" status={statusIconBadgeVariant[labelType]} />
        <StatusBill label={labelType} size="sm" status={statusBillVariant[labelType]} />
      </InfoCard.Trailing>
    </InfoCard>
  )
}

export default AddressCard
