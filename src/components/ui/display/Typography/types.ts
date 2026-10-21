import { TypographyVariant } from '@/types'
import { StyleProp, TextProps, TextStyle } from 'react-native'

export type TypographyProps = {
  variant: TypographyVariant
  children: React.ReactNode
  color?: string
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase'
  style?: StyleProp<TextStyle>
} & TextProps
