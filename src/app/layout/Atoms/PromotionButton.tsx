import { RiCoupon3Line } from "react-icons/ri"
import IconButton from "@mui/material/IconButton"

interface IPromotionButton {
  onShow: () => void
}

const PromotionButton = ({ onShow }: IPromotionButton) => {
  return (
    <IconButton onClick={onShow}>
      <RiCoupon3Line className="text-lightRed text-base" />
      <span className="text-xs ml-3 text-white dark:text-black font-bold">
        프로모션
      </span>
    </IconButton>
  )
}

export default PromotionButton
