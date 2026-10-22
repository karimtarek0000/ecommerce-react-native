type BottomSheetComponent = typeof import('@gorhom/bottom-sheet').default
type BottomSheetProps = React.ComponentProps<BottomSheetComponent>

export type BottomSheetRef = React.ComponentRef<BottomSheetComponent>

export type AppBottomSheetProps = {
  headTitle: string
  description: string
  ref: React.Ref<BottomSheetRef>
  bottomSheetProps?: BottomSheetProps
}