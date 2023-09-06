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
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
}

export default function BasicModal({
  children,
  modalId,
  modalTitle,
  hideModal,
  isShowModal,
}: IBasicModal) {
  return (
    <Modal
      open={isShowModal}
      onClose={hideModal}
      aria-labelledby={`modal-${modalId}`}
      aria-describedby={`modal-${modalId}`}
    >
      <Box sx={style}>
        <Typography
          id={modalId}
          variant="h6"
          sx={{ mb: 2, textAlign: "center" }}
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
