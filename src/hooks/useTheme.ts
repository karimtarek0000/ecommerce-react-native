import { useAppSelector } from '@/store/hook'
import { themeSelector } from '@/store/theme/themeSlice'
import { Theme } from '@/types'
import { useColorScheme } from 'react-native'
import { useUserPreferences } from './useUserPreferences'

export const useTheme = () => {
  const colorSchema = useColorScheme()
  const { theme: selectedTheme } = useUserPreferences()
  const themes = useAppSelector(themeSelector)

  const getSystemSchema = colorSchema === 'dark' ? 'dark' : 'light'

  const renderTheme: Exclude<Theme, 'system'> =
    selectedTheme === 'system' ? getSystemSchema : selectedTheme

  return themes[renderTheme]
}
