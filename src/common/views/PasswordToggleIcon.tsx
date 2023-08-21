import { BiHide, BiShow } from "react-icons/bi"

interface IPasswordToggleIcon {
  isShowPassword: boolean
  onHidePassword: () => void
  onShowPassword: () => void
  classNames?: string
}

const PasswordToggleIcon = ({
  isShowPassword,
  onHidePassword,
  onShowPassword,
  classNames,
}: IPasswordToggleIcon) => {
  if (!isShowPassword) {
    return (
      <span
        onClick={onShowPassword}
        className={`${classNames} absolute top-1/2 right-[20px] transform -translate-y-1/2 cursor-pointer`}
      >
        <BiShow />
      </span>
    )
  }

  return (
    <span
      onClick={onHidePassword}
      className={`${classNames} absolute top-1/2 right-[20px] transform -translate-y-1/2 cursor-pointer`}
    >
      <BiHide />
    </span>
  )
}

export default PasswordToggleIcon
