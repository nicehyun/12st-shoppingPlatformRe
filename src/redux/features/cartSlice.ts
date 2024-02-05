import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

type InitialCartState = {
  isAllChecked: boolean
  checkedProductList: ProductsInCart
  pendingRemovalProduct: ProductInCart | null
}

const initialCartState: InitialCartState = {
  isAllChecked: false,
  checkedProductList: [],
  pendingRemovalProduct: null,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    allcheckedProductList(state, actions: PayloadAction<ProductsInCart>) {
      state.isAllChecked = true
      state.checkedProductList = actions.payload
    },
    unAllcheckedProductList(state) {
      state.isAllChecked = false
      state.checkedProductList = []
    },
    checkedProduct(state, actions: PayloadAction<ProductInCart>) {
      state.checkedProductList.push(actions.payload)
    },
    uncheckedProduct(state, actions: PayloadAction<string>) {
      state.isAllChecked = false

      state.checkedProductList = state.checkedProductList.filter(
        (checkedProduct) => checkedProduct.id !== actions.payload
      )
    },
    emptyCheckedProductList(state) {
      state.checkedProductList = []
    },
    addToRemovalProduct(state, actions: PayloadAction<ProductInCart>) {
      state.pendingRemovalProduct = actions.payload
    },
  },
})

export const {
  allcheckedProductList,
  unAllcheckedProductList,
  checkedProduct,
  uncheckedProduct,
  emptyCheckedProductList,
  addToRemovalProduct,
} = cartSlice.actions

export const selectIsAllChecked = (state: RootState) => state.cart.isAllChecked

export const selectCheckedProductList = (state: RootState) =>
  state.cart.checkedProductList

export const selectPendingRemovalProduct = (state: RootState) =>
  state.cart.pendingRemovalProduct

export default cartSlice.reducer
