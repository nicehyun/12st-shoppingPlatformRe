"use client"

import {
  hideRouteModal,
  selectRouteModalState,
} from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { ROUTE, useNavigations } from "../hooks/useNavigations"

const RouteModal = () => {
  const { isShowModal, modalId, modalTitle, modalContent, route } =
    useAppSelector(selectRouteModalState)
  const dispatch = useAppDispatch()
  const { routeTo } = useNavigations()

  const handleRouteModalHide = () => {
    dispatch(hideRouteModal())
  }

  const handleRouteAgreeClick = () => {
    routeTo(route ?? ROUTE.HOME)
    handleRouteModalHide()
  }

  if (!isShowModal) return <></>

  return (
    <Dialog
      open={isShowModal}
      onClose={handleRouteModalHide}
      aria-labelledby={`routeModal-${modalId}`}
      aria-describedby={`routeModal-${modalId}`}
    >
      <DialogTitle id={`routeModal-title-${modalId}`} className="text-center">
        {modalTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id={`routeModal-description-${modalId}`}
          className="text-black text-[14px]"
        >
          {modalContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleRouteAgreeClick}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 78, 10, 0.2)",
            },
            color: "#ff4e0a",
          }}
          autoFocus
        >
          이동
        </Button>
        <Button
          onClick={handleRouteModalHide}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 78, 10, 0.2)",
            },
            color: "#ccc",
          }}
        >
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RouteModal
