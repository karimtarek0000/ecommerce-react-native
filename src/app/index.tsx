// import Icon from '@/components/icons/Icon'
// import Typography from '@/components/ui/display/Typography/Typography'
// import { useUserPreferences } from '@/hooks'
// import useTranslations from '@/hooks/useTranslations'
// import { Button, View } from 'react-native'
import { IconBadge } from '@/components/ui/display'
import { BottomSheet, BottomSheetRef } from '@/components/ui/overlay'
import { useUserPreferences } from '@/hooks'
import { useRef } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Index() {
  const ref = useRef<BottomSheetRef>(null)
  // const [toggleModal, setToggleModal] = useState(false)
  // const [title, setTitle] = useState('')
  // const theme = useTheme()
  // const { currentLanguage, isRTL, t } = useTranslations()
  // const [selected, setSelected] = useState(false)
  const { setTheme } = useUserPreferences()

  return (
    <View style={styles.view}>
      <IconBadge iconName="mapPin" />

      <View style={styles.sentinel} />
      <Button title="Bottom Sheet" onPress={() => ref.current?.expand()} />
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />

      <BottomSheet
        ref={ref}
        headTitle=" Bottom Sheet Title"
        description="Optional secondary description below the title"
        bottomSheetProps={{
          snapPoints: ['19%', '60%'],
          children: <Text>Testing</Text>,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
  },
  sentinel: {
    marginTop: 30,
  },
})
