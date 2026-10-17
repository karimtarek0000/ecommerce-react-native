import { IconName } from '@/components/icons/types'
import { StyleProp, ViewStyle } from 'react-native'

type FormInputBaseProps = {
  label: string
  placeholder: string
  value: string
  onChange: (text: string) => void
  style?: StyleProp<ViewStyle>
  errorMessage?: string
}

export type FormInputProps = FormInputBaseProps &
  (
    | {
        type?: 'text'
        iconName: IconName
        onClearInput?: VoidFunction
      }
    | {
        type: 'password'
        iconName?: never
        onClearInput?: never
      }
  )

export type StatusTypes = 'default' | 'focused' | 'filled' | 'error'
