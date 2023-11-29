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
import { ReactNode } from "react"
import Button from "./Button"

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

  borderRadius: "5px",
  overflowY: "scroll",
}

interface IBasicModal {
  children: ReactNode
}

export default function BasicModal({ children }: IBasicModal) {
  const { isShowModal, modalId, modalTitle } = useAppSelector(
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
        <>
          <div className="sticky w-full top-0 h-[40px] bg-white flex items-center justify-end pr-[10px]">
            <Button
              onClick={() => dispatch(hideBasicModal())}
              classNames="text-[20px] text-lightBlack"
              content={<AiOutlineClose />}
            />
          </div>

          <div className="px-[32px] pb-[32px]">
            <Typography
              id={modalId}
              variant="h6"
              sx={{
                mb: 2,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {modalTitle}
            </Typography>

            {children}
          </div>
        </>
      </Box>
    </Modal>
  )
}
