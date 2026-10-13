import { useAppDispatch, useAppSelector } from '@/store/hook'
import {
  setLangauge,
  setTheme,
  userPerferencesSelector,
} from '@/store/userPreferences/userPreferencesSlice'
import { Languages, Theme } from '@/types'

export const useUserPreferences = () => {
  const dispatch = useAppDispatch()
  const perferences = useAppSelector(userPerferencesSelector)

  return {
    ...perferences,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setLanguage: (language: Languages) => dispatch(setLangauge(language)),
  }
}
