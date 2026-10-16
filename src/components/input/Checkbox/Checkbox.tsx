import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { useTheme } from '@/hooks'
import { Pressable, View } from 'react-native'
import { CheckBoxProps } from './type'
import { useStyles } from './useStyles'

const CheckBox = ({ isActive, onChange, label, style, disbaled }: CheckBoxProps) => {
  const styles = useStyles({ isActive, disbaled })
  const theme = useTheme()

  return (
    <View style={styles.view}>
      <Typography variant="xsmallBold" textTransform="capitalize">
        {label}
      </Typography>

      <Pressable onPress={onChange} style={[styles.wrapper, style]} disabled={disbaled}>
        <Icon name="check" size={16} color={theme.forground.contrast} style={[styles.indicator]} />
      </Pressable>
    </View>
  )
}

export default CheckBox
