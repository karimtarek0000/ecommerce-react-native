import Icon from '@/components/icons/Icon'
import Typography from '@/components/ui/display/Typography/Typography'
import { useTheme, useUserPreferences } from '@/hooks'
import useTranslations from '@/hooks/useTranslations'
import { Button, View } from 'react-native'

export default function Index() {
  const theme = useTheme()
  const { currentLanguage, isRTL, t } = useTranslations()
  const { setTheme, setLanguage } = useUserPreferences()

  return (
    <View style={{ backgroundColor: theme.background.surfaceRaised }}>
      <Typography variant="heroBold" color={theme.forground.secondary}>
        Language is {currentLanguage} / Key hello is: {t('hello', { name: 'karim' })}
      </Typography>
      <Icon name="chevron" size={14} color={theme.forground.secondary} isRTL={isRTL} />
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />
      <Button title="EN" onPress={() => setLanguage('en')} />
      <Button title="AR" onPress={() => setLanguage('ar')} />
    </View>
  )
}
