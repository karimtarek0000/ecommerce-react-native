// import Icon from '@/components/icons/Icon'
// import Typography from '@/components/ui/display/Typography/Typography'
// import { useUserPreferences } from '@/hooks'
// import useTranslations from '@/hooks/useTranslations'
// import { Button, View } from 'react-native'
import { RowNav } from '@/components/ui/navigation'
import { useUserPreferences } from '@/hooks'
import { StyleSheet, View } from 'react-native'

export default function Index() {
  // const theme = useTheme()
  // const { currentLanguage, isRTL, t } = useTranslations()
  // const [selected, setSelected] = useState(false)
  const { setTheme } = useUserPreferences()

  return (
    <View style={styles.view}>
      <RowNav
        title="Edit Profile"
        onPress={() => console.log('Change')}
        iconName="check"
        trilingType="chevron"
      />
      {/* <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    paddingHorizontal: 10,
  },
})
