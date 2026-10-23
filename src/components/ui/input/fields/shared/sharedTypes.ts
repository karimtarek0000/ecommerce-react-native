import { IconName } from '@/components/icons/types'
import { StyleProp, ViewStyle } from 'react-native'

export type TextInputType = 'text' | 'password'
export type StatusTypes = 'default' | 'focused' | 'filled' | 'error'

export type FieldWrapperProps = {
  label: string
  iconName: IconName
  errorMessage?: string
  currentStatusInput: StatusTypes
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export type FieldLabelProps = {
  label: string
}

export type FieldErrorProps = {
  errorMessage?: string
}

export type FieldProps = {
  label: string
  placeholder: string
  errorMessage?: string
  value: string
  style?: StyleProp<ViewStyle>
}
