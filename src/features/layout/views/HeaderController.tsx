import HeaderControllerEl from "./HeaderControllerEl"

import { FaUserTag, FaHeart } from "react-icons/fa"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import HeaderCartButton from "./HeaderCartButton"
import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import { signOut, useSession } from "next-auth/react"

interface IHeaderController {
  isShowPromotion: boolean
}

const HeaderController = ({ isShowPromotion }: IHeaderController) => {
  const { routeTo } = useNavigations()
  const { data: session } = useSession()

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
          classNames="before:vertical-divider hidden xl:block"
          onClick={() => {}}
        />
        <li className="relative xl:before:vertical-divider">
          <HeaderCartButton />
        </li>

        {session ? (
          <HeaderControllerEl
            title="SIGN OUT"
            icon={<FiLogOut />}
            isShowPromotion={isShowPromotion}
            classNames="before:vertical-divider"
            onClick={() => signOut()}
          />
        ) : (
          <HeaderControllerEl
            title="SIGN IN"
            icon={<FiLogIn />}
            isShowPromotion={isShowPromotion}
            classNames="before:vertical-divider"
            onClick={() => routeTo(ROUTE.SIGNIN)}
          />
        )}
      </ul>
    </div>
  )
}

export default HeaderController
