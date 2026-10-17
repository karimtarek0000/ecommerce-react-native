// import Icon from '@/components/icons/Icon'
// import Typography from '@/components/ui/display/Typography/Typography'
// import { useUserPreferences } from '@/hooks'
// import useTranslations from '@/hooks/useTranslations'
// import { Button, View } from 'react-native'
import { Button, FormInput } from '@/components/ui/input'
import { useUserPreferences } from '@/hooks'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Index() {
  const [title, setTitle] = useState('')
  // const theme = useTheme()
  // const { currentLanguage, isRTL, t } = useTranslations()
  // const [selected, setSelected] = useState(false)
  const { setTheme } = useUserPreferences()

  return (
    <View style={styles.view}>
      <FormInput
        value={title}
        iconName="user"
        label="Enter you email"
        placeholder="Enter your name"
        onChange={text => setTitle(text)}
        onClearInput={() => setTitle('')}
      />

      <View style={styles.sentinel} />
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />
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
  sentinel: {
    marginTop: 30,
  },
})
