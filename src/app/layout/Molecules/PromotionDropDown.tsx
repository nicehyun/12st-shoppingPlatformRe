import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import { useState } from "react"
import PromotionEl from "../Atoms/PromotionEl"

const options = [
  "[ 신규가입 ] <span className={'text-red-400'}>15%</span> 할인쿠폰",
  "[ 삼성카드 ] 14만원 캐시백 프로모션",
  "[ 카카오페이 ] 5 / 8 / 20이상 결제시 3천/4천/1만 즉시 할인 할인쿠폰",
]

interface IPromotionDropDown {
  isShow: boolean
  onHide: () => void
}

export default function PromotionDropDown({
  isShow,
  onHide,
}: IPromotionDropDown) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuItemClick = () => {
    setAnchorEl(null)
    onHide()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={isShow}
      onClose={onHide}
      MenuListProps={{
        role: "listbox",
      }}
    >
      <MenuItem
        onClick={() => handleMenuItemClick()}
        className={"text-sm sm:text-xs"}
      >
        <PromotionEl
          content="[ 신규가입 ] 15% 할인쿠폰"
          highlightedTextStart={8}
          highlightedTextEnd={12}
          onClick={() => handleMenuItemClick()}
          classNames={"text-sm sm:text-xs"}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick()}
        className={"text-sm sm:text-xs"}
      >
        <PromotionEl
          content="[ 삼성카드 ] 14만원 캐시백 프로모션"
          highlightedTextStart={9}
          highlightedTextEnd={14}
          onClick={() => handleMenuItemClick()}
          classNames={"text-sm sm:text-xs"}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick()}
        className={"text-sm sm:text-xs"}
      >
        <PromotionEl
          content="[ 카카오페이 ] 5 / 8 / 20이상 결제시 3천/4천/1만 즉시 할인 할인쿠폰"
          highlightedTextStart={27}
          highlightedTextEnd={35}
          onClick={() => handleMenuItemClick()}
          classNames={"text-sm sm:text-xs"}
        />
      </MenuItem>
    </Menu>
  )
}
