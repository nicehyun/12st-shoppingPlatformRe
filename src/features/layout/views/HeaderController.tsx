import HeaderControllerEl from "./HeaderControllerEl"

import { FaUserTag, FaHeart } from "react-icons/fa"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import HeaderCartButton from "./HeaderCartButton"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import { signOut } from "next-auth/react"
import { AiOutlineSearch } from "react-icons/ai"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"

interface IHeaderController {
  isShowPromotion: boolean
  isShowCart: boolean
  onShowSearchForm: () => void
}

const HeaderController = ({
  isShowPromotion,
  isShowCart,
  onShowSearchForm,
}: IHeaderController) => {
  const { routeTo } = useNavigations()
  const { sessionQuery } = useSessionQuery()

  return (
    <div
      className={`absolute right-[5px]
      ${isShowPromotion ? "top-[52px]" : "top-[20px]"}
      `}
    >
      <ul className="flex">
        <HeaderControllerEl
          title="SEARCH"
          icon={<AiOutlineSearch />}
          isShowPromotion={isShowPromotion}
          onClick={onShowSearchForm}
        />

        <HeaderControllerEl
          title="MY PAGE"
          icon={<FaUserTag />}
          isShowPromotion={isShowPromotion}
          classNames="before:vertical-divider hidden xl:block"
          onClick={() => {}}
        />
        <HeaderControllerEl
          title="MY LIKE"
          icon={<FaHeart />}
          isShowPromotion={isShowPromotion}
          classNames="before:vertical-divider hidden xl:block"
          onClick={() => {}}
        />

        {isShowCart && (
          <li className="relative xl:before:vertical-divider">
            <HeaderCartButton />
          </li>
        )}

        {sessionQuery ? (
          <HeaderControllerEl
            title="SIGN OUT"
            icon={<FiLogOut />}
            isShowPromotion={isShowPromotion}
            classNames={isShowCart ? "before:vertical-divider" : ""}
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
