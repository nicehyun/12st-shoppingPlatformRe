"use client"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import { ReactNode } from "react"

interface IAlertModal {
  cancelButtonContent: ReactNode
  agreeButtonContent: ReactNode
  isShowModal: boolean
  modalId: string
  isDisabledAgreeButton?: boolean
  onClickConfirmedAlertButton: () => void
  onHideModal: () => void
  children: ReactNode
}

const AlertModal = ({
  cancelButtonContent,
  agreeButtonContent,
  isShowModal,
  isDisabledAgreeButton,
  modalId,
  onClickConfirmedAlertButton,
  onHideModal,
  children,
}: IAlertModal) => {
  if (!isShowModal) return <></>

  return (
    <Dialog
      open={isShowModal}
      onClose={onHideModal}
      aria-labelledby={`alertModal-${modalId}`}
      aria-describedby={`alertModal-${modalId}`}
    >
      <DialogContent id={`alertModal-description-${modalId}`}>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          disabled={isDisabledAgreeButton}
          onClick={onClickConfirmedAlertButton}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 78, 10, 0.2)",
            },
            color: "#ccc",
          }}
        >
          {agreeButtonContent}
        </Button>
        <Button
          onClick={onHideModal}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 78, 10, 0.2)",
            },
            color: "#ff4e0a",
          }}
        >
          {cancelButtonContent}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertModal
