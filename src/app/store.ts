import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/themeSlice"
import modalReducer from "../features/modalSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
  },
})

export default store
