import { ReactNode } from "react"
import Button from "./Button"
import Loading from "./Loading"

interface ILoadingButton {
  className?: string
  isLoading: boolean
  onClick: () => void
  content: ReactNode
  spinnerSize?: "sm" | "md"
}

const LoadingButton = ({
  className,
  isLoading,
  onClick,
  content,
  spinnerSize = "md",
}: ILoadingButton) => {
  const loadingSpinnerSize =
    spinnerSize === "sm"
      ? { height: "h-[26px]", width: "w-[26px]" }
      : { height: "h-[26px]", width: "w-[26px]" }

  return (
    <Button
      onClick={onClick}
      isDisabled={isLoading}
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
