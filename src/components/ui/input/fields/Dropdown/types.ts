import { IconName } from '@/components/icons/types'
import { FieldProps } from '../shared/sharedTypes'

type DropdownOption = {
  label: string
  value: string
}

export type DropdownProps = FieldProps & {
  value: string
  options: DropdownOption[]
  iconName: IconName
  placeholder?: string
  onSelect: (text: string) => void
}

export type DropdownOptionProps = {
  options: DropdownOption[]
  value: string
  onSelect: (text: string) => void
}
