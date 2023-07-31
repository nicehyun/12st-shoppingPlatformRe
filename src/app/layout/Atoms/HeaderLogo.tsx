interface IHeaderLogo {
  isShowPromotion: boolean
}

const HeaderLogo = ({ isShowPromotion }: IHeaderLogo) => {
  return (
    <div
      className={`absolute left-10
    ${isShowPromotion ? "top-[40px]" : "top-[72px]"}
    `}
      style={{
        transition: "0.2s",
      }}
    >
      로고
    </div>
  )
}

export default HeaderLogo
