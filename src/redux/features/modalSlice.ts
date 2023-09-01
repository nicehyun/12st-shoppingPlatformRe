import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

interface ShowFeedbackModalPayload {
  modalContent: string
}

const initialModalState = {
  feedbackModal: {
    isShowModal: false,
    modalContent: "",
  },
  cartModal: {
    isShow: false,
  },
}

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showFeedbackModal(state, actions: PayloadAction<ShowFeedbackModalPayload>) {
      state.feedbackModal.isShowModal = true
      state.feedbackModal.modalContent = actions.payload.modalContent
    },
    hideFeedbackModal(state) {
      state.feedbackModal.isShowModal = false
      state.feedbackModal.modalContent = ""
    },
    showCartModal(state) {
      state.cartModal.isShow = true
    },
    hideCartModal(state) {
      state.cartModal.isShow = false
    },
  },
})

export const {
  showFeedbackModal,
  hideFeedbackModal,
  showCartModal,
  hideCartModal,
} = modalSlice.actions

export const selectFeedbackModal = (state: RootState) =>
  state.modal.feedbackModal

export const selectCartModalState = (state: RootState) => state.modal.cartModal

export default modalSlice.reducer
