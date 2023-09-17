"use client"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { AiOutlineClose } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  hideBasicModal,
  selectBasicModalState,
} from "@/redux/features/modalSlice"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
  overflowY: "scroll",
}

export default function BasicModal() {
  const { isShowModal, modalContent, modalId, modalTitle } = useAppSelector(
    selectBasicModalState
  )
  const dispatch = useAppDispatch()
  return (
    <Modal
      open={isShowModal}
      onClose={() => dispatch(hideBasicModal())}
      aria-labelledby={`modal-${modalId}`}
      aria-describedby={`modal-${modalId}`}
      className="dark:text-black"
    >
      <Box sx={style}>
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
        {modalContent}

        <button
          onClick={() => dispatch(hideBasicModal())}
          className="absolute top-[20px] right-[20px] text-[20px] text-lightBlack"
        >
          <AiOutlineClose />
        </button>
      </Box>
    </Modal>
  )
}
