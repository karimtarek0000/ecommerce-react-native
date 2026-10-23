import { IconName } from '@/components/icons/types'
import { FieldProps, TextInputType } from '../shared/sharedTypes'

export type TextInputProps = FieldProps & {
  onChange: (text: string) => void
} & (
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

export type TextInputActionsProps = {
  type: TextInputType
  isPasswordVisible: boolean
  hasValue: boolean
  onChangeVisibility: VoidFunction
  onClearInput?: VoidFunction
}
