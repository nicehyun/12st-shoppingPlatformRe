import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

type InitialCategoryState = {
  isShowCategory: boolean
}

const initialCategoryState: InitialCategoryState = {
  isShowCategory: false,
}

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    showCategory(state) {
      state.isShowCategory = true
    },
    hideCategory(state) {
      state.isShowCategory = false
    },
  },
})

export const { hideCategory, showCategory } = categorySlice.actions

export const selectCategoryState = (state: RootState) => state.category

export default categorySlice.reducer
