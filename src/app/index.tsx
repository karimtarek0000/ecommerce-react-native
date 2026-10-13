import Typography from '@/components/ui/display/Typography/Typography'
import { useTheme, useUserPreferences } from '@/hooks'
import { Button, View } from 'react-native'

export default function Index() {
  const theme = useTheme()
  const { setTheme } = useUserPreferences()

  return (
    <View style={{ backgroundColor: theme.background.surfaceRaised }}>
      <Typography variant="mediumLight" color={theme.forground.secondary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellendus at laudantium
        debitis voluptas, veritatis cupiditate maiores est quos. Consequatur.
      </Typography>
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />
    </View>
  )
}
