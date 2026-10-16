import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { RowNavProps } from './type'
import { useStyles } from './useStyles'

const RowNav = ({
  variant = 'default',
  title,
  iconName,
  style,
  trilingType,
  trilingText,
  onPress,
}: RowNavProps) => {
  const { styles, variants } = useStyles()

  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.mainInfo]}>
        <Icon name={iconName} color={variants[variant]} />
        <Typography variant="smallBold" color={variants[variant]}>
          {title}
        </Typography>
      </View>

      <View style={[styles.trilingInfo]}>
        {trilingType === 'chevronWithValue' && (
          <Typography variant="smallRegular" color={styles.trilingInfo.color}>
            {trilingText}
          </Typography>
        )}
        <Pressable onPress={onPress}>
          {trilingType !== 'noChevron' && (
            <Icon name="chevron" flip color={styles.trilingInfo.color} />
          )}
        </Pressable>
      </View>
    </View>
  )
}

export default RowNav
