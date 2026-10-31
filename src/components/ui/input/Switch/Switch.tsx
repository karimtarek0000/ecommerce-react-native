import { Pressable, View } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { Typography } from '../../display'
import { SwicthProps } from './types'
import { useStyles } from './useStyles'

const Switch = ({ isSelected, onChange, label, style, disbaled, ...rest }: SwicthProps) => {
  const styles = useStyles({ isSelected, disbaled })

  return (
    <Pressable onPress={onChange} style={[styles.view, style]} disabled={disbaled} {...rest}>
      <Typography variant="normalBold">{label}</Typography>
      <View style={styles.wrapper}>
        <Animated.View layout={LinearTransition.springify()} style={[styles.indicator]} />
      </View>
    </Pressable>
  )
}

export default Switch
