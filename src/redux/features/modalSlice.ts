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
  },
})

export const { showFeedbackModal, hideFeedbackModal } = modalSlice.actions

export const selectFeedbackModal = (state: RootState) =>
  state.modal.feedbackModal

export default modalSlice.reducer
