import { createSlice } from "@reduxjs/toolkit"

const prefersLightScheme = window.matchMedia(
  "(prefers-color-scheme: light)"
).matches

const initialState = {
  isLight: prefersLightScheme,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isLight = !state.isLight
    },
  },
})

export const themeSelector = (state: any) => state.theme.isLight

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
