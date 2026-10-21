import IconBadge from '../IconBadge/IconBadge'
import InfoCard from '../InfoCard/InfoCard'
import StatusBill from '../StatusBill/StatusBill'
import { PaymentCardProps } from './type'

const PaymentCard = ({
  onPress,
  isSelected,
  cardType,
  expiryDate,
  cardNumber,
  style,
}: PaymentCardProps) => {
  const cardNumberFormat = `•••• •••• •••• ${cardNumber}`
  const cardExpiryFormat = `${cardType} · Expires ${expiryDate}`

  return (
    <InfoCard onPress={onPress} isSelected={isSelected} style={style}>
      <InfoCard.Leading title={cardNumberFormat} description={cardExpiryFormat} />
      <InfoCard.Trailing>
        <IconBadge iconName="creditCard" status={isSelected ? 'default' : 'warning'} />
        {isSelected && <StatusBill label="default" size="sm" status="onProgress" />}
      </InfoCard.Trailing>
    </InfoCard>
  )
}

export default PaymentCard
