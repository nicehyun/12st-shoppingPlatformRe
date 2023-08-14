import HeaderControllerEl from "./HeaderControllerEl"

import { FaUserTag, FaHeart } from "react-icons/fa"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import SearchButton from "./SearchButton"
import HeaderCartButton from "./HeaderCartButton"
import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"

interface IHeaderController {
  isShowPromotion: boolean
  onShowSearchDialog: () => void
}

const HeaderController = ({
  isShowPromotion,
  onShowSearchDialog,
}: IHeaderController) => {
  const { routeTo } = useNavigations()

  return (
    <div
      className={`absolute right-[5px]
      ${isShowPromotion ? "top-[52px]" : "top-[20px]"}
      `}
    >
      <ul className="flex">
        <HeaderControllerEl
          title="MY PAGE"
          icon={<FaUserTag />}
          isShowPromotion={isShowPromotion}
          classNames="hidden xl:block"
          onClick={() => {}}
        />
        <HeaderControllerEl
          title="MY LIKE"
          icon={<FaHeart />}
          isShowPromotion={isShowPromotion}
          classNames="before:headerController hidden xl:block"
          onClick={() => {}}
        />
        <li className="relative xl:before:headerController">
          <HeaderCartButton />
        </li>
        <HeaderControllerEl
          title="LOGIN"
          icon={<FiLogIn />}
          isShowPromotion={isShowPromotion}
          classNames="before:headerController"
          onClick={() => routeTo(ROUTE.SIGNIN)}
        />
        <li className="relative cursor-pointer w-[100px] sm:w-[60px] md:w-[80px] before:headerController">
          <SearchButton onClick={onShowSearchDialog} />
        </li>
      </ul>
    </div>
  )
}

export default HeaderController
