import translations from '@/store/translations/translations.json'
import { Translations } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState: Translations = translations

const translationsSlice = createSlice({
  name: 'translations',
  initialState,
  reducers: {},
})

export const translationsSelector = (state: RootState) => state.translations
export default translationsSlice.reducer
