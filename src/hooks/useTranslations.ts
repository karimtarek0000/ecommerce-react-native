import { useAppSelector } from '@/store/hook'
import { translationsSelector } from '@/store/translations/translationsSlice'
import { TranslateKey } from '@/types'
import useUserPreferences from './useUserPreferences'

const useTranslations = () => {
  const { language: selectedLanguage } = useUserPreferences()
  const translations = useAppSelector(translationsSelector)

  const { dir: direction, keys } = translations[selectedLanguage]

  const t: TranslateKey = (key, params) => {
    const text = keys[key] ?? `This ${key} does not exist.`

    if (!params) return text

    return text.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
      return params[variable]?.toString() ?? `This ${match} does not exist.`
    })
  }

  return {
    t,
    direction,
    currentLanguage: selectedLanguage,
  }
}

export default useTranslations
