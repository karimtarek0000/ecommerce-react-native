import { ScrollViewProps } from 'react-native'

export type PaddingSidesTypes = 'both' | 'start' | 'end' | 'none'

export type ScreenLayoutBaseProps = {
  typePaddingSides?: PaddingSidesTypes
  renderTopBar?: () => React.ReactNode
  children: React.ReactNode
}

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  (
    | {
        scrollable?: false
        scrollProps?: never
        dismissKeyboardOnTap?: boolean
      }
    | {
        scrollable: true
        scrollProps?: ScrollViewProps
        dismissKeyboardOnTap?: never
      }
  )

export type UseStylesScreenLayoutProps = {
  typePaddingSides: PaddingSidesTypes
  hasTopBar?: boolean
}
