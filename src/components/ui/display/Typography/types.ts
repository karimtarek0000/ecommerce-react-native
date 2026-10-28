import { Languages, TypographyVariant } from '@/types'
import { StyleProp, TextProps, TextStyle } from 'react-native'

type TextChildren = string | number | TextChildren[]

export type TypographyProps = {
  variant: TypographyVariant
  children: TextChildren
  switchLanguage?: Languages
  color?: string
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase'
  style?: StyleProp<TextStyle>
} & Omit<TextProps, 'children'>
