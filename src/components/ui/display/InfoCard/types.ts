import { StyleProp, ViewProps } from 'react-native'

export type InfoCardProps = {
  onPress: VoidFunction
  isSelected?: boolean
  children: React.ReactNode
  style?: StyleProp<ViewProps>
}

export type InforCardLeadingProps = {
  title: string
  description: string
}

export type InforCardTrailingProps = {
  children: React.ReactNode
}
