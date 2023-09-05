import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

type InitialCartState = {
  checkedProductList: string[]
}

const initialCartState: InitialCartState = {
  checkedProductList: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    allcheckedProduct(state, actions: PayloadAction<string[]>) {
      const checkedProductList: string[] = []

      actions.payload.map((productId) => checkedProductList.push(productId))

      state.checkedProductList = checkedProductList
    },

    checkedProduct(state, actions: PayloadAction<string>) {
      state.checkedProductList.push(actions.payload)
    },
    uncheckedProduct(state, actions: PayloadAction<string>) {
      state.checkedProductList = state.checkedProductList.filter(
        (checkedProduct) => checkedProduct !== actions.payload
      )
    },
    emptyCheckedProductList(state) {
      state.checkedProductList = []
    },
  },
})

export const {
  allcheckedProduct,
  checkedProduct,
  uncheckedProduct,
  emptyCheckedProductList,
} = cartSlice.actions

export const selectCheckedProductList = (state: RootState) =>
  state.cart.checkedProductList

export default cartSlice.reducer
