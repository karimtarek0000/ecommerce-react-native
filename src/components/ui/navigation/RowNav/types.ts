import { IconName } from '@/components/icons/types'
import { StyleProp, ViewStyle } from 'react-native'

export type Variant = 'default' | 'danger'

export type RowNavBaseProps = {
  variant?: Variant
  title: string
  iconName: IconName
  style?: StyleProp<ViewStyle>
  onPress: VoidFunction
}

export type RowNavProps = RowNavBaseProps &
  (
    | { trilingType: 'chevronWithValue'; trilingText: string }
    | { trilingType?: 'chevron' | 'noChevron'; trilingText?: never }
  )
