import translations from '@/store/translations/translations.json'

export type Languages = 'en' | 'ar'
export type Directions = 'ltr' | 'rtl'

export type Translations = typeof translations
export type TranslationsKeys = keyof typeof translations.en.keys
