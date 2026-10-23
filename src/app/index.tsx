import { Dropdown } from '@/components/ui/input'
import { DismissKeyboard } from '@/components/ui/layout'
import { useUserPreferences } from '@/hooks'
import { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function Index() {
  const [city, setCity] = useState('')
  const { setTheme, setLanguage } = useUserPreferences()

  return (
    <DismissKeyboard style={styles.view}>
      <Dropdown
        label="city"
        options={[
          { label: 'london', value: 'london' },
          { label: 'paris', value: 'paris' },
          { label: 'new york', value: 'new york' },
          { label: 'tokyo', value: 'tokyo' },
          { label: 'berlin', value: 'berlin' },
        ]}
        value={city}
        onSelect={text => setCity(text)}
        placeholder="Select Type"
        iconName="home"
      />

      <View style={styles.sentinel} />
      <View style={styles.sentinel} />
      <View style={styles.sentinel} />

      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />
      <Button title="Arabic" onPress={() => setLanguage('ar')} />
      <Button title="English" onPress={() => setLanguage('en')} />
    </DismissKeyboard>
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
