import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { SwicthProps } from './type'
import { useStyles } from './useStyles'

const Switch = ({ isActive, onChange, label, style, disbaled }: SwicthProps) => {
  const styles = useStyles({ isActive, disbaled })

  return (
    <View style={styles.view}>
      <Typography variant="xsmallBold">{label}</Typography>

      <Pressable onPress={onChange} style={[styles.wrapper, style]} disabled={disbaled}>
        <Animated.View layout={LinearTransition.springify()} style={[styles.indicator]} />
      </Pressable>
    </View>
  )
}

export default Switch
