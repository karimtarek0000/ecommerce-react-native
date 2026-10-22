import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { ActivityIndicator, Pressable } from 'react-native'
import { type ButtonProps } from './types'
import { useStyles } from './useStyles'

const Button = ({
  title,
  variant = 'primary',
  size = 'lg',
  block,
  disabled,
  onPress,
  iconName,
  loading,
}: ButtonProps) => {
  const isDisabled = loading?.indicator || disabled
  const { styles, fontSize, typographyColor } = useStyles({
    variant,
    size,
    block,
    disabled: isDisabled,
  })

  return (
    <Pressable onPress={onPress} style={styles.button} disabled={isDisabled}>
      {!loading?.indicator && iconName && <Icon name={iconName} color={typographyColor} />}

      {loading?.indicator && <ActivityIndicator color={typographyColor} size="small" />}

      <Typography variant={fontSize} color={typographyColor}>
        {loading?.indicator ? loading.text || title : title}
      </Typography>
    </Pressable>
  )
}

export default Button
