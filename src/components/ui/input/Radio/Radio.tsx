import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { RadioProps } from './types'
import { useStyles } from './useStyles'

const Radio = ({ isSelected, onChange, label, style, disabled, ...rest }: RadioProps) => {
  const styles = useStyles({ isSelected, disabled })

  return (
    <Pressable onPress={onChange} style={[styles.view, style]} disabled={disabled} {...rest}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperIndicator}>
          <View style={[styles.indicator]} />
        </View>
        <Typography variant="normalBold">{label}</Typography>
      </View>
    </Pressable>
  )
}

export default Radio
