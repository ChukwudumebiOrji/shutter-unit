import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isModalOpen: false,
  currentIndex: 0,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true
      state.currentIndex = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.currentIndex = 0
    },
  },
})

export const modalSelector = (state: any) => state.modal

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
