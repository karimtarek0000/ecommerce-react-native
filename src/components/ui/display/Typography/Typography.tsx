import useFontStyle from '@/hooks/useFontsStyle'
import { TypographyVariant } from '@/types'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

type TypographyProps = {
  variant: TypographyVariant
  children: React.ReactNode
  color?: string
  style?: StyleProp<TextStyle>
} & TextProps

const Typography = ({ variant, children, color, style, ...props }: TypographyProps) => {
  const typographyStyles = useFontStyle()

  return (
    <Text style={[typographyStyles[variant], { color }, style]} {...props}>
      {children}
    </Text>
  )
}

export default Typography
