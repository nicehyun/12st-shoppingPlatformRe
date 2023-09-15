import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

type InitialCartState = {
  checkedProductList: ProductsInCart
}

const initialCartState: InitialCartState = {
  checkedProductList: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    allcheckedProduct(state, actions: PayloadAction<ProductsInCart>) {
      state.checkedProductList = actions.payload
    },

    checkedProduct(state, actions: PayloadAction<ProductInCart>) {
      state.checkedProductList.push(actions.payload)
    },
    uncheckedProduct(state, actions: PayloadAction<string>) {
      state.checkedProductList = state.checkedProductList.filter(
        (checkedProduct) => checkedProduct.id !== actions.payload
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
