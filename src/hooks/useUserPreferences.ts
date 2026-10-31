import { presistor } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import translations from '@/store/translations/translations.json'
import {
  setLangauge,
  setNotifications,
  setTheme,
  userPerferencesSelector,
} from '@/store/userPreferences/userPreferencesSlice'
import { Languages, Theme } from '@/types'
import * as Updates from 'expo-updates'
import Constants, { ExecutionEnvironment } from 'expo-constants'
import { DevSettings, I18nManager } from 'react-native'

const useUserPreferences = () => {
  const dispatch = useAppDispatch()
  const perferences = useAppSelector(userPerferencesSelector)

  const changeLanguageHandler = async (language: Languages) => {
    dispatch(setLangauge(language))

    const shouldBeRTL = translations[language].dir === 'rtl'

    I18nManager.allowRTL(shouldBeRTL)
    I18nManager.forceRTL(shouldBeRTL)

    await presistor.flush()

    if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
      return
    }

    if (__DEV__) {
      DevSettings.reload()
    } else {
      await Updates.reloadAsync()
    }
  }

  return {
    ...perferences,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setLanguage: changeLanguageHandler,
    setPushNotifications: () => dispatch(setNotifications()),
  }
}

export default useUserPreferences
