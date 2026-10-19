import { Typography } from '@/components/ui/display'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import { Ref } from 'react'
import { View } from 'react-native'
import { useStyles } from './useStyles'

export type BottomSheetRef = BottomSheet

type AppBottomSheetProps = {
  headTitle: string
  description: string
  ref: Ref<BottomSheet>
  bottomSheetProps?: BottomSheetProps
}

const AppBottomSheet = ({ headTitle, description, bottomSheetProps, ref }: AppBottomSheetProps) => {
  const styles = useStyles()

  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      style={styles.backdrop}
      {...props}
    />
  )

  return (
    <BottomSheet
      ref={ref}
      snapPoints={bottomSheetProps?.snapPoints ?? ['50%', '90%']}
      index={bottomSheetProps?.index ?? -1}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.indicator}
      handleStyle={styles.bottomSheetHead}
      backgroundStyle={styles.bottomSheet}
      {...bottomSheetProps}
    >
      <BottomSheetView style={styles.wrapper}>
        <View style={styles.bottomSheetHeadWrapper}>
          <Typography
            variant="mediumBold"
            color={styles.bottomSheetLabel.color}
            textTransform="capitalize"
          >
            {headTitle}
          </Typography>

          <Typography
            variant="smallRegular"
            color={styles.bottomSheetDesc.color}
            textTransform="capitalize"
          >
            {description}
          </Typography>
        </View>

        <View style={styles.bottomSheetBodyWrapper}>{bottomSheetProps?.children}</View>
      </BottomSheetView>
    </BottomSheet>
  )
}

export default AppBottomSheet
