import { IconName } from '@/components/icons/types'
import { StyleProp, ViewStyle } from 'react-native'

export type TextInputType = 'text' | 'password'

export type TextInputActionsProps = {
  type: TextInputType
  isPasswordVisible: boolean
  onChangeVisibility: VoidFunction
  onClearInput?: VoidFunction
  hasValue: boolean
}

type TextInputBaseProps = {
  label?: string
  placeholder: string
  value: string
  onChange: (text: string) => void
  style?: StyleProp<ViewStyle>
  errorMessage?: string
}

export type TextInputProps = TextInputBaseProps &
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
