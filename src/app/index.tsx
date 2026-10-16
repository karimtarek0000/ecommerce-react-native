// import Icon from '@/components/icons/Icon'
// import Typography from '@/components/ui/display/Typography/Typography'
// import { useUserPreferences } from '@/hooks'
// import useTranslations from '@/hooks/useTranslations'
// import { Button, View } from 'react-native'
import { CheckBox } from '@/components/input'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Index() {
  const [selected, setSelected] = useState(false)
  // const theme = useTheme()
  // const { setTheme, setLanguage } = useUserPreferences()
  // const { currentLanguage, isRTL, t } = useTranslations()

  return (
    <View style={styles.view}>
      <CheckBox
        label="CheckBox"
        isSelected={selected}
        onChange={() => {
          setSelected(!selected)
        }}
      />
      {/* <Button
        title="Submit"
        onPress={() => ''}
        variant="chip"
        iconName="circleCheck"
        loading={{
          indicator: true,
          text: 'Loading',
        }}
      /> */}
      {/* <Button title="Dark Mode" onPress={() => setTheme('dark')} /> */}
      {/* <Button title="Light Mode" onPress={() => setTheme('light')} /> */}
      {/* <Typography variant="heroBold" color={theme.forground.secondary}>
        Language is {currentLanguage} / Key hello is: {t('hello', { name: 'karim' })}
      </Typography> */}
      {/* <Icon name="circleCheck" size={45} color={theme.forground.tertiary} />
      <Icon name="chevron" size={45} color={theme.forground.tertiary} isRTL={isRTL} />
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />
      <Button title="EN" onPress={() => setLanguage('en')} />
      <Button title="AR" onPress={() => setLanguage('ar')} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
})
