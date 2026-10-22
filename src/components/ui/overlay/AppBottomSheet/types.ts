import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet'

export type BottomSheetRef = BottomSheet

type BottomSheetPropsExclude = Omit<
  BottomSheetProps,
  | 'children'
  | 'enableDynamicSizing'
  | 'handleIndicatorStyle'
  | 'handleStyle'
  | 'backgroundStyle'
  | 'enablePanDownToClose'
>

export type AppBottomSheetProps = {
  headTitle: string
  description?: string
  bottomSheetProps?: BottomSheetPropsExclude
  children: React.ReactNode
  ref: React.Ref<BottomSheet>
}
