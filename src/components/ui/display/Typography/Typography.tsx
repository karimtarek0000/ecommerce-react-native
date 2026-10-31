import useFontStyle from '@/hooks/useFontsStyle'
import { Text } from 'react-native'
import { TypographyProps } from './types'

const Typography = ({
  variant,
  color,
  textTransform = 'capitalize',
  textAlign = 'left',
  style,
  switchLanguage,
  children,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyle(switchLanguage)

  return (
    <Text
      style={[typographyStyles[variant], { color, textTransform, textAlign }, style]}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Typography
