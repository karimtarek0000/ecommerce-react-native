import { IconName } from '@/components/icons/types'
import { StyleProp, ViewStyle } from 'react-native'

type FormInputBaseProps = {
  label: string
  placeholder: string
  value?: string
  onChange: VoidFunction
  style?: StyleProp<ViewStyle>
  errorMessage?: string
}

export type FormInputProps = FormInputBaseProps &
  (
    | {
        type?: 'text'
        iconName: IconName
      }
    | {
        type: 'password'
        iconName?: never
      }
  )

export type StatusTypes = 'default' | 'focused' | 'filled' | 'error'
