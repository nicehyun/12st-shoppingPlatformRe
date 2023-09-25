import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "../types/store"

interface ShowFeedbackModalPayload {
  modalContent: string
}

interface ShowBasicModalPayload {
  modalId: string
  modalTitle: string
  modalContent: string
}

type FeedbackModal = {
  isShowModal: boolean
  modalContent: string
}

type CartModal = {
  isShowModal: boolean
}

type BasicModal = {
  isShowModal: boolean
  modalId: string
  modalTitle: string
  modalContent: string | null
}

type InitialModalState = {
  feedbackModal: FeedbackModal
  cartModal: CartModal
  basicModal: BasicModal
}

const initialModalState: InitialModalState = {
  feedbackModal: {
    isShowModal: false,
    modalContent: "",
  },
  cartModal: {
    isShowModal: false,
  },
  basicModal: {
    isShowModal: false,
    modalId: "",
    modalTitle: "",
    modalContent: null,
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
      state.cartModal.isShowModal = true
    },
    hideCartModal(state) {
      state.cartModal.isShowModal = false
    },
    showBasicModal(state, actions: PayloadAction<ShowBasicModalPayload>) {
      state.basicModal.isShowModal = true
      state.basicModal.modalId = actions.payload.modalId
      state.basicModal.modalTitle = actions.payload.modalTitle
      state.basicModal.modalContent = actions.payload.modalContent
    },
    hideBasicModal(state) {
      state.basicModal.isShowModal = false
    },
  },
})

export const {
  showFeedbackModal,
  hideFeedbackModal,
  showCartModal,
  hideCartModal,
  showBasicModal,
  hideBasicModal,
} = modalSlice.actions

export const selectFeedbackModal = (state: RootState) =>
  state.modal.feedbackModal

export const selectCartModalState = (state: RootState) => state.modal.cartModal

export const selectBasicModalState = (state: RootState) =>
  state.modal.basicModal

export default modalSlice.reducer
