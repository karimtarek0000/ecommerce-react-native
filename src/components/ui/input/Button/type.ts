import { IconName } from '@/components/icons/types'

export type VariantType = 'primary' | 'link' | 'chip' | 'ghost' | 'danger'
export type VariantSize = 'sm' | 'lg'

export type ButtonProps = {
  title: string
  variant?: VariantType
  size?: VariantSize
  onPress: VoidFunction
  iconName?: IconName
  loading?: { indicator?: boolean; text: string }
  block?: boolean
  disabled?: boolean
}

export type UseStyles = {
  variant: VariantType
  size?: VariantSize
  block?: boolean
  disabled?: boolean
}
