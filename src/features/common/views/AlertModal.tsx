import { Slide } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import { TransitionProps } from "@mui/material/transitions"
import { ReactElement, ReactNode, forwardRef } from "react"
import Loading from "./Loading"

interface IAlertModal<T> {
  isShowModal: boolean
  modalId: string
  modalContent: string
  onAgreeFn: T
  onCancelFn: () => void
  isLoading?: boolean
  children?: ReactNode
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AlertModal = <T extends (...args: any[]) => any>({
  isShowModal,
  modalId,
  modalContent,
  onAgreeFn,
  onCancelFn,
  isLoading = false,
  children,
}: IAlertModal<T>) => {
  return (
    <Dialog
      open={isShowModal || isLoading}
      TransitionComponent={Transition}
      keepMounted
      onClose={onCancelFn}
      aria-labelledby={`alertModal-${modalId}`}
      aria-describedby={`alertModal-${modalId}`}
    >
      <div className="relative">
        {isLoading && (
          <div className="absolute h-full w-full bg-transparentWhite flexCenter z-10">
            <Loading
              spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
              isFrame={false}
            />
          </div>
        )}
        <DialogContent
          id={`alertModal-description-${modalId}`}
          className="text-black text-[14px]"
        >
          {modalContent}
          {children}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={onAgreeFn}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 78, 10, 0.2)",
              },
              color: "#ccc",
            }}
          >
            AGREE
          </Button>
          <Button
            onClick={onCancelFn}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 78, 10, 0.2)",
              },
              color: "#ff4e0a",
            }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default AlertModal
