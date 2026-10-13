import { Languages, Theme } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

type InitialState = {
  language: Languages
  theme: Theme
}

const initialState: InitialState = {
  language: 'en',
  theme: 'light',
}

const userPerferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setLangauge(state, action: PayloadAction<Languages>) {
      state.language = action.payload
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload
    },
  },
})

export const userPerferencesSelector = (state: RootState) => state.userPerferences
export const { setLangauge, setTheme } = userPerferencesSlice.actions
export default userPerferencesSlice.reducer
