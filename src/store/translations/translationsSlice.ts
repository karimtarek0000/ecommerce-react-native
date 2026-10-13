import translations from '@/store/translations/translations.json'
import { Translations } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Translations = translations

const translationsSlice = createSlice({
  name: 'translations',
  initialState,
  reducers: {},
})

export default translationsSlice.reducer
