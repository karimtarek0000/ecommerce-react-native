import { RowNavProps } from '@/components/ui/navigation/RowNav/types'

export type RenderNavigationList = {
  title: string
  rows: RowNavProps[]
}

export type NavigationListProps = {
  renderNavigationList: RenderNavigationList[]
}
