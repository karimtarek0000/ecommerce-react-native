import colors from '@/store/theme/colors.json'
import { ThemeColors } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState: ThemeColors = colors

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
})

export const themeSelector = (state: RootState) => state.theme
export default themeSlice.reducer
