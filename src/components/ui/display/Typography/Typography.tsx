import useFontStyle from '@/hooks/useFontsStyle'
import { Text } from 'react-native'
import { TypographyProps } from './types'

const Typography = ({
  variant,
  color,
  textTransform = 'capitalize',
  style,
  switchLanguage,
  children,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyle(switchLanguage)

  return (
    <Text style={[typographyStyles[variant], { color, textTransform }, style]} {...props}>
      {children}
    </Text>
  )
}

export default Typography
