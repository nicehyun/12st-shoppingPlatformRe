import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import Button from "@/common/views/Button"

interface IHeaderLogo {
  isShowPromotion: boolean
}

const HeaderLogo = ({ isShowPromotion }: IHeaderLogo) => {
  const { routeTo } = useNavigations()
  return (
    <Button
      classNames={`absolute left-10 font-bold
    ${isShowPromotion ? "top-[72px]" : "top-[40px]"}
    `}
      style={{
        transition: "0.2s",
      }}
      content="12ST"
      onClick={() => routeTo(ROUTE.HOME)}
    />
  )
}

export default HeaderLogo
