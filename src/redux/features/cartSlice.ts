import { ProductsInCart } from "@/features/cart/types/cart"
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
    allcheckedProduct(state, actions: PayloadAction<ProductsInCart>) {
      const checkedProductList: string[] = []

      actions.payload.map((product) => checkedProductList.push(product.id))

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
