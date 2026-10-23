import { Dropdown } from '@/components/ui/input'
import { DismissKeyboard } from '@/components/ui/layout'
import { useUserPreferences } from '@/hooks'
import { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function Index() {
  const [country, setCountry] = useState('')
  const { setTheme, setLanguage } = useUserPreferences()

  return (
    <DismissKeyboard style={styles.view}>
      <Dropdown
        label="country"
        options={[
          { label: 'Argentina', value: 'argentina' },
          { label: 'Australia', value: 'australia' },
          { label: 'Brazil', value: 'brazil' },
          { label: 'Canada', value: 'canada' },
          { label: 'China', value: 'china' },
          { label: 'Egypt', value: 'egypt' },
          { label: 'France', value: 'france' },
          { label: 'Germany', value: 'germany' },
          { label: 'India', value: 'india' },
          { label: 'Italy', value: 'italy' },
          { label: 'Japan', value: 'japan' },
          { label: 'Kenya', value: 'kenya' },
          { label: 'Mexico', value: 'mexico' },
          { label: 'Netherlands', value: 'netherlands' },
          { label: 'New Zealand', value: 'new-zealand' },
          { label: 'Nigeria', value: 'nigeria' },
          { label: 'South Africa', value: 'south-africa' },
          { label: 'Spain', value: 'spain' },
          { label: 'United Kingdom', value: 'united-kingdom' },
          { label: 'United States', value: 'united-states' },
        ]}
        value={country}
        onSelect={text => setCountry(text)}
        placeholder="Select Country"
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
