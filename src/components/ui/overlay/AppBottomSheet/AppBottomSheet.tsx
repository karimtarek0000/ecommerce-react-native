import { Typography } from '@/components/ui/display'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { ComponentProps } from 'react'
import { View } from 'react-native'
import { AppBottomSheetProps } from './types'
import { useStyles } from './useStyles'

const AppBottomSheetContent = ({ style, children, ...rest }: ComponentProps<typeof View>) => {
  const styles = useStyles()

  return (
    <View style={[styles.content, style]} {...rest}>
      {children}
    </View>
  )
}

const AppBottomSheetScrollView = ({
  style,
  children,
  ...rest
}: ComponentProps<typeof BottomSheetScrollView>) => {
  const styles = useStyles()

  return (
    <BottomSheetScrollView style={[styles.content, style]} {...rest}>
      {children}
    </BottomSheetScrollView>
  )
}

const AppBottomSheetFlatList = ({ style, ...rest }: ComponentProps<typeof BottomSheetFlatList>) => {
  const styles = useStyles()

  return <BottomSheetFlatList style={[styles.content, style]} {...rest} />
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
    <Portal>
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
    </Portal>
  )
}

AppBottomSheet.Content = AppBottomSheetContent
AppBottomSheet.ScrollView = AppBottomSheetScrollView
AppBottomSheet.FlatList = AppBottomSheetFlatList

export default AppBottomSheet
