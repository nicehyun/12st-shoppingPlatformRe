import { ReactNode } from "react"
import Button from "./Button"
import Loading from "./Loading"

interface ILoadingButton {
  className?: string
  isLoading: boolean
  isDisabled?: boolean
  onClick?: () => void
  content: ReactNode
  spinnerSize?: "sm" | "md"
  type?: "button" | "submit"
}

const LoadingButton = ({
  className,
  isLoading,
  isDisabled,
  onClick,
  content,
  spinnerSize = "md",
  type = "button",
}: ILoadingButton) => {
  const loadingSpinnerSize =
    spinnerSize === "sm"
      ? { height: "h-[26px]", width: "w-[26px]" }
      : { height: "h-[26px]", width: "w-[26px]" }

  return (
    <Button
      type={type}
      onClick={onClick}
      isDisabled={isLoading || isDisabled}
      content={
        isLoading ? (
          <Loading spinnerSize={loadingSpinnerSize} isFrame={false} />
        ) : (
          content
        )
      }
      classNames={className}
    />
  )
}

export default LoadingButton
