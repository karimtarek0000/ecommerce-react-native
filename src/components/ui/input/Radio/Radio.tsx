import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { RadioProps } from './types'
import { useStyles } from './useStyles'

const Radio = ({ isSelected, onChange, label, style, disbaled }: RadioProps) => {
  const styles = useStyles({ isSelected, disbaled })

  return (
    <View style={styles.view}>
      <Typography variant="xsmallBold">{label}</Typography>

      <Pressable onPress={onChange} style={[styles.wrapper, style]} disabled={disbaled}>
        <View style={[styles.indicator]} />
      </Pressable>
    </View>
  )
}

export default Radio
