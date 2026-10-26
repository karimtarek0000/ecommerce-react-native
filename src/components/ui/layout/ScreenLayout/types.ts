export type PaddingSidesTypes = 'both' | 'start' | 'end' | 'none'

export type ScreenLayoutProps = {
  typePaddingSides?: PaddingSidesTypes
  renderTopBar?: () => React.ReactNode
  children: React.ReactNode
}

export type UseStylesScreenLayoutProps = {
  typePaddingSides: PaddingSidesTypes
  hasTopBar?: boolean
}
