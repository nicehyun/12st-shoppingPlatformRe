import HeaderControllerEl from "../Atoms/HeaderControllerEl"

import { FaUserTag, FaHeart } from "react-icons/fa"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import { useEffect, useRef } from "react"
import { setupAnimationTransform } from "@/common/utils/animation"
import { manageRefArray } from "@/common/utils/refArray"
import SearchButton from "../Atoms/SearchButton"
import HeaderCartButton from "../Atoms/HeaderCartButton"

interface IHeaderController {
  isShowPromotion: boolean
}

const HeaderController = ({ isShowPromotion }: IHeaderController) => {
  return (
    <div
      className={`absolute right-[5px]
      ${isShowPromotion ? "top-[20px]" : "top-[52px]"}
      `}
      style={{
        transition: "0.2s",
      }}
    >
      <ul className="flex">
        <HeaderControllerEl
          title="MY PAGE"
          icon={<FaUserTag />}
          isShowPromotion={isShowPromotion}
        />
        <HeaderControllerEl
          title="MY LIKE"
          icon={<FaHeart />}
          isShowPromotion={isShowPromotion}
          classNames="before:headerController"
        />

        <li className="relative before:headerController">
          <HeaderCartButton />
        </li>

        <HeaderControllerEl
          title="LOGIN"
          icon={<FiLogIn />}
          isShowPromotion={isShowPromotion}
          classNames="before:headerController"
        />

        <li className="relative cursor-pointer w-[100px] before:headerController">
          <SearchButton />
        </li>
      </ul>
    </div>
  )
}

export default HeaderController
