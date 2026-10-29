import { RowNavProps } from '@/components/ui/navigation/RowNav/types'

export type RenderRowNavComponents = {
  title: string
  rows: RowNavProps[]
}

export type HomeScreenSectionsProps = {
  renderSectionsHomeScreen: RenderRowNavComponents[]
}
