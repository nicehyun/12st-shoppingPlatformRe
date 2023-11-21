"use client"

import { forwardRef, ReactElement } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  hideFeedbackModal,
  selectFeedbackModal,
} from "@/redux/features/modalSlice"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FeedbackModal() {
  const { isShowModal, modalContent } = useAppSelector(selectFeedbackModal)
  const dispatch = useAppDispatch()

  const handleCloseFeedbackModal = () => {
    dispatch(hideFeedbackModal())
  }

  if (!isShowModal) return <></>

  return (
    <Dialog
      open={isShowModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseFeedbackModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          className="text-black text-[14px]"
        >
          {modalContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseFeedbackModal}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 78, 10, 0.2)",
            },
            color: "#ff4e0a",
          }}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  )
}
