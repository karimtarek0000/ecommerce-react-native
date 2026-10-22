import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet'

export type BottomSheetRef = BottomSheet

export type AppBottomSheetProps = {
  headTitle: string
  description: string
  ref: React.Ref<BottomSheet>
  bottomSheetProps?: BottomSheetProps
}
