export type PaddingSidesTypes = 'none' | 'both' | 'start' | 'end'

export type ScreenLayoutProps = {
  typePaddingSides?: PaddingSidesTypes
  renderTopBar?: () => React.ReactNode
  children: React.ReactNode
}

export type UseStylesScreenLayoutProps = {
  typePaddingSides: PaddingSidesTypes
  hasTopBar?: boolean
}
