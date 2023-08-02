import HeaderControllerEl from "../Atoms/HeaderControllerEl"

import { FaUserTag, FaHeart } from "react-icons/fa"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import SearchButton from "../Atoms/SearchButton"
import HeaderCartButton from "../Atoms/HeaderCartButton"

interface IHeaderController {
  isShowPromotion: boolean
}

const HeaderController = ({ isShowPromotion }: IHeaderController) => {
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
        />
        <HeaderControllerEl
          title="MY LIKE"
          icon={<FaHeart />}
          isShowPromotion={isShowPromotion}
          classNames="before:headerController hidden xl:block"
        />

        <li className="relative xl:before:headerController">
          <HeaderCartButton />
        </li>

        <HeaderControllerEl
          title="LOGIN"
          icon={<FiLogIn />}
          isShowPromotion={isShowPromotion}
          classNames="before:headerController"
        />

        <li className="relative cursor-pointer w-[100px] sm:w-[60px] md:w-[80px] before:headerController">
          <SearchButton />
        </li>
      </ul>
    </div>
  )
}

export default HeaderController
