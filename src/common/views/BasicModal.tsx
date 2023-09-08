import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { ReactNode } from "react"
import { AiOutlineClose } from "react-icons/ai"

interface IBasicModal {
  children: ReactNode
  modalTitle: string
  modalId: string
  isShowModal: boolean
  hideModal: () => void
  isFull?: boolean
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 550,
  maxWidth: 800,
  height: "80vh",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
  overflowY: "scroll",
}

const fullScreenStyle = {
  position: "absolute" as "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  bgcolor: "background.paper",
  p: 4,
  overflowY: "scroll",
}

export default function BasicModal({
  children,
  modalId,
  modalTitle,
  hideModal,
  isShowModal,
  isFull = false,
}: IBasicModal) {
  return (
    <Modal
      open={isShowModal}
      onClose={hideModal}
      aria-labelledby={`modal-${modalId}`}
      aria-describedby={`modal-${modalId}`}
    >
      <Box sx={isFull ? fullScreenStyle : style}>
        <Typography
          id={modalId}
          variant="h6"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {modalTitle}
        </Typography>
        {children}

        <button
          onClick={hideModal}
          className="absolute top-[20px] right-[20px] text-[20px] text-lightBlack"
        >
          <AiOutlineClose />
        </button>
      </Box>
    </Modal>
  )
}
