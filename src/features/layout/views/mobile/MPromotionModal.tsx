import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import MPromotionEl from "./MPromotionEl"
import { forwardRef } from "react"

interface IMPromotionModal {
  isShow: boolean
  onHide: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function MPromotionModal({ isShow, onHide }: IMPromotionModal) {
  const handleClose = () => {
    onHide()
  }

  return (
    <Dialog
      open={isShow}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className="dark:bg-white/80"
      PaperProps={{ className: "dark:bg-black" }}
    >
      <DialogTitle className="text-black dark:text-white text-center text-[16px]">
        PROMOTION
      </DialogTitle>
      <DialogContent>
        <MPromotionEl
          classNames="mb-[20px]"
          promotingCompany="[ 신규가입 ]"
          content="12st 신규 가입 시 15% 할인쿠폰"
          highlightedTextStart={12}
          highlightedTextEnd={16}
        />
        <MPromotionEl
          classNames="mb-[20px]"
          promotingCompany="[ 삼성카드 ]"
          content="삼성카드 결제 시 14만원 캐시백"
          highlightedTextStart={10}
          highlightedTextEnd={14}
        />
        <MPromotionEl
          promotingCompany="[ 카카오페이 ]"
          content="5 / 8 / 20이상 결제시 3천/4천/1만 즉시 할인"
          highlightedTextStart={16}
          highlightedTextEnd={26}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="text-lightRed">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
