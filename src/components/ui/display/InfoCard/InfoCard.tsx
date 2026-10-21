import { Pressable, View } from 'react-native'
import Typography from '../Typography/Typography'
import { InfoCardProps, InforCardLeadingProps, InforCardTrailingProps } from './types'
import { useStyles } from './useStyles'

const InforCardLeading = ({ title, description }: InforCardLeadingProps) => {
  const styles = useStyles()

  return (
    <View style={styles.infoCardLeading}>
      <Typography
        variant="smallBold"
        style={styles.infoCardLeadingLabel}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Typography>
      <Typography
        variant="xsmallRegular"
        style={styles.infoCardLeadingDesc}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {description}
      </Typography>
    </View>
  )
}

const InforCardTrailing = ({ children }: InforCardTrailingProps) => {
  const styles = useStyles()

  return <View style={styles.infoCardTrailing}>{children}</View>
}

const InfoCard = ({ onPress, isSelected = false, style, children }: InfoCardProps) => {
  const styles = useStyles(isSelected)

  return (
    <Pressable onPress={onPress} style={[styles.wrapper, style]}>
      {children}
    </Pressable>
  )
}

InfoCard.Leading = InforCardLeading
InfoCard.Trailing = InforCardTrailing

export default InfoCard
