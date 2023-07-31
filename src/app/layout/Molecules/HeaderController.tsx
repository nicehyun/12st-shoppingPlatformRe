import HeaderControllerEl from "../Atoms/HeaderControllerEl"

import { FaUserTag, FaHeart } from "react-icons/fa"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import { useEffect, useRef } from "react"
import { setupAnimationTransform } from "@/common/utils/animation"
import { manageRefArray } from "@/common/utils/refArray"

interface IHeaderController {
  isShowPromotion: boolean
}

const HeaderController = ({ isShowPromotion }: IHeaderController) => {
  const headerControllerIconRef = useRef<HTMLButtonElement[]>([])
  const headerControllerTitleRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    if (!isShowPromotion) {
      setupAnimationTransform(
        headerControllerTitleRef,
        "X",
        30,
        0,
        "block",
        "hidden"
      )
      setupAnimationTransform(
        headerControllerIconRef,
        "X",
        28,
        1,
        "block",
        "visible"
      )
    } else {
      setupAnimationTransform(
        headerControllerTitleRef,
        "X",
        -8,
        1,
        "block",
        "visible"
      )
      setupAnimationTransform(
        headerControllerIconRef,
        "X",
        30,
        0,
        "block",
        "hidden"
      )
    }
  }, [isShowPromotion])

  return (
    <div
      className={`absolute right-10
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
          titleRef={manageRefArray(1, headerControllerTitleRef)}
          iconRef={manageRefArray(1, headerControllerIconRef)}
        />
        <HeaderControllerEl
          title="MY LIKE"
          titleRef={manageRefArray(2, headerControllerTitleRef)}
          iconRef={manageRefArray(2, headerControllerIconRef)}
          icon={<FaHeart />}
          classNames="before:headerController"
        />
        <HeaderControllerEl
          title="LOGIN"
          titleRef={manageRefArray(3, headerControllerTitleRef)}
          iconRef={manageRefArray(3, headerControllerIconRef)}
          icon={<FiLogIn />}
          classNames="before:headerController"
        />
      </ul>
    </div>
  )
}

export default HeaderController
