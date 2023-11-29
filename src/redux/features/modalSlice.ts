import { ROUTE } from "@/features/common/hooks/useNavigations"
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

interface ShowRouteModalPayload {
  modalId: string
  modalTitle: string
  modalContent: string
  route: ROUTE
}

type FeedbackModal = {
  isShowModal: boolean
  modalContent: string
}

type BasicModal = {
  isShowModal: boolean
  modalId: string
  modalTitle: string
  modalContent: string | null
}

type RouteModal = {
  isShowModal: boolean
  modalId: string
  modalTitle: string
  modalContent: string
  route: ROUTE | null
}

type InitialModalState = {
  feedbackModal: FeedbackModal
  basicModal: BasicModal
  routeModal: RouteModal
}

const initialModalState: InitialModalState = {
  feedbackModal: {
    isShowModal: false,
    modalContent: "",
  },
  basicModal: {
    isShowModal: false,
    modalId: "",
    modalTitle: "",
    modalContent: null,
  },
  routeModal: {
    isShowModal: false,
    modalId: "",
    modalTitle: "",
    modalContent: "",
    route: null,
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
    showBasicModal(state, actions: PayloadAction<ShowBasicModalPayload>) {
      state.basicModal.isShowModal = true
      state.basicModal.modalId = actions.payload.modalId
      state.basicModal.modalTitle = actions.payload.modalTitle
      state.basicModal.modalContent = actions.payload.modalContent
    },
    hideBasicModal(state) {
      state.basicModal.isShowModal = false
    },
    showRouteModal(state, actions: PayloadAction<ShowRouteModalPayload>) {
      state.routeModal.isShowModal = true
      state.routeModal.modalId = actions.payload.modalId
      state.routeModal.modalTitle = actions.payload.modalTitle
      state.routeModal.modalContent = actions.payload.modalContent
      state.routeModal.route = actions.payload.route
    },
    hideRouteModal(state) {
      state.routeModal.isShowModal = false
      state.routeModal.modalId = ""
      state.routeModal.modalTitle = ""
      state.routeModal.modalContent = ""
      state.routeModal.route = null
    },
  },
})

export const {
  showFeedbackModal,
  hideFeedbackModal,
  showBasicModal,
  hideBasicModal,
  hideRouteModal,
  showRouteModal,
} = modalSlice.actions

export const selectFeedbackModal = (state: RootState) =>
  state.modal.feedbackModal

export const selectBasicModalState = (state: RootState) =>
  state.modal.basicModal

export const selectRouteModalState = (state: RootState) =>
  state.modal.routeModal

export default modalSlice.reducer
