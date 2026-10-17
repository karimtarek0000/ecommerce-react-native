import { IconName } from '@/components/icons/types'
import { StyleProp, ViewStyle } from 'react-native'

export type FormInputProps = {
  label: string
  placeholder: string
  type?: 'text' | 'password'
  value?: string
  iconName: IconName
  onChange: VoidFunction
  style?: StyleProp<ViewStyle>
  errorMessage?: string
}

export type StatusTypes = 'default' | 'focused' | 'filled' | 'error'
