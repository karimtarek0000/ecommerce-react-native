import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { RowNavProps } from './types'
import { useStyles } from './useStyles'

const RowNav = ({
  variant = 'default',
  title,
  iconName,
  style,
  trilingType = 'chevron',
  trilingText,
  onPress,
}: RowNavProps) => {
  const { styles, variants } = useStyles()

  return (
    <Pressable onPress={onPress} style={[styles.wrapper, style]}>
      <View style={[styles.mainInfo]}>
        <Icon name={iconName} color={variants[variant]} />

        <Typography variant="smallBold" color={variants[variant]}>
          {title}
        </Typography>
      </View>

      <View style={[styles.trilingInfo]}>
        {trilingType === 'chevronWithValue' && trilingText && (
          <Typography variant="smallRegular" color={styles.trilingInfo.color}>
            {trilingText}
          </Typography>
        )}

        {trilingType !== 'noChevron' && (
          <Icon name="chevron" flip color={styles.trilingInfo.color} />
        )}
      </View>
    </Pressable>
  )
}

export default RowNav
