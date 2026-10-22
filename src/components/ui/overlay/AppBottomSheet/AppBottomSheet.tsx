import { Typography } from '@/components/ui/display'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { ComponentProps } from 'react'
import { View } from 'react-native'
import { AppBottomSheetProps } from './types'
import { useStyles } from './useStyles'

const AppBottomSheetContent = ({ style, children }: ComponentProps<typeof View>) => {
  const styles = useStyles()

  return <View style={[styles.content, style]}>{children}</View>
}

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
      <View style={styles.wrapper}>
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

        {children}
      </View>
    </BottomSheet>
  )
}

AppBottomSheet.Content = AppBottomSheetContent

export default AppBottomSheet
