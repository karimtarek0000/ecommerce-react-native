import { Languages, Theme } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

type InitialState = {
  language: Languages
  theme: Theme
  pushNotifications: boolean
}

const initialState: InitialState = {
  language: 'en',
  theme: 'light',
  pushNotifications: false,
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
    setNotifications(state) {
      state.pushNotifications = !state.pushNotifications
    },
  },
})

export const userPerferencesSelector = (state: RootState) => state.userPerferences
export const { setLangauge, setTheme, setNotifications } = userPerferencesSlice.actions
export default userPerferencesSlice.reducer
