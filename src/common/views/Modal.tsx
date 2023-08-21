import Modal from "@mui/joy/Modal"

import { ReactNode } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material"

type ModalOptions = {
  variant?: "solid" | "soft" | "outlined" | "plain"
  layout?: "center" | "fullscreen"
  size?: "sm" | "lg" | "md"
  isConfirm?: boolean
  isCheck?: boolean
  sx?: { width?: string; height?: string; padding?: string }
}

type ModalContents = {
  modalTitle?: string
  modalDescription?: string
}

export interface IModalProps {
  children?: ReactNode
  modalContents?: ModalContents
  isShowModal: boolean
  onHideModal: () => void
  options?: ModalOptions
}

// const ModalContent = styled.div`
//   overflow-y: auto;
//   overflow-x: hidden;
// `

const ModalView = ({
  children,
  modalContents = { modalTitle: "", modalDescription: "" },
  isShowModal,
  options = {
    variant: "outlined",
    layout: "center",
    size: "sm",
    isConfirm: false,
    isCheck: false,
    sx: {
      width: "auto",
      height: "auto",
      padding: "20px",
    },
  },

  onHideModal,
}: IModalProps) => {
  return (
    <Modal
      open={isShowModal}
      onClose={(_event: React.MouseEvent<HTMLButtonElement>) => {
        onHideModal()
      }}
    >
      <Dialog
        aria-labelledby={modalContents.modalTitle}
        aria-describedby={modalContents.modalDescription}
        // variant={options.variant}
        // layout={options.layout}
        size={options.size}
        sx={{
          minWidth: "400px",
          minHeight: "120px",
          width: options.sx?.width,
          height: options.sx?.height,
          padding: options.sx?.padding,
        }}
      >
        {/* {!options.isCheck && <ModalClose />} */}
        {!!modalContents.modalTitle?.length && (
          <DialogTitle
            // id={modalContents.modalTitle}
            // component="h2"
            // level="inherit"
            sx={{
              borderBottom: `3px solid tomato`,
              paddingBottom: "10px",
              marginBottom: "20px",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            {modalContents.modalTitle}
          </DialogTitle>
        )}

        <ModalContent>{children}</ModalContent>

        {options.isConfirm && (
          <DialogActions
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "flex-end",
              pt: 2,
            }}
          >
            <Button variant="plain" color="neutral" onClick={onHideModal}>
              취소
            </Button>
            <Button variant="solid" color="danger" onClick={onHideModal}>
              확인
            </Button>
          </DialogActions>
        )}

        {options.isCheck && (
          <Button
            variant="outlined"
            color="primary"
            onClick={onHideModal}
            size="sm"
            sx={{
              width: "80px",
              height: "30px",
              position: "absolute",
              right: "10px",
              bottom: "10px",
              borderColor: `${colorLightRed}`,
              color: `${colorLightRed}`,
            }}
          >
            확인
          </Button>
        )}
      </Dialog>
    </Modal>
  )
}

export default ModalView
