import { Typography } from '@/components/ui/display'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { View } from 'react-native'
import { AppBottomSheetProps } from './types'
import { useStyles } from './useStyles'

const AppBottomSheet = ({
  headTitle,
  description,
  bottomSheetProps,
  ref,
  children,
}: AppBottomSheetProps) => {
  const styles = useStyles()

  const RenderBackdrop = (props: any) => (
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
      backdropComponent={RenderBackdrop}
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

          {description && (
            <Typography
              variant="smallRegular"
              color={styles.bottomSheetDesc.color}
              textTransform="capitalize"
            >
              {description}
            </Typography>
          )}
        </View>

        <View style={styles.bottomSheetBodyWrapper}>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  )
}

export default AppBottomSheet
