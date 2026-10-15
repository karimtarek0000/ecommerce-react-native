import { useAppSelector } from '@/store/hook'
import { translationsSelector } from '@/store/translations/translationsSlice'
import { Directions, TranslateKey } from '@/types'
import useUserPreferences from './useUserPreferences'

const useTranslations = () => {
  const { language: selectedLanguage } = useUserPreferences()
  const translations = useAppSelector(translationsSelector)

  const { dir, keys } = translations[selectedLanguage]

  const isRTL = dir === ('rtl' as Directions)

  const t: TranslateKey = (key, params) => {
    const text = keys[key] ?? `This ${key} does not exist.`

    if (!params) return text

    return text.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
      return params[variable]?.toString() ?? `This ${match} does not exist.`
    })
  }

  return {
    t,
    isRTL,
    currentLanguage: selectedLanguage,
  }
}

export default useTranslations
