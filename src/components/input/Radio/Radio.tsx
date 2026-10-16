import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { RadioProps } from './type'
import { useStyles } from './useStyles'

const Radio = ({ isActive, onChange, label, style, disbaled }: RadioProps) => {
  const styles = useStyles({ isActive, disbaled })

  return (
    <View style={styles.view}>
      <Typography variant="xsmallBold" textTransform="capitalize">
        {label}
      </Typography>

      <Pressable onPress={onChange} style={[styles.wrapper, style]} disabled={disbaled}>
        <View style={[styles.indicator]} />
      </Pressable>
    </View>
  )
}

export default Radio
