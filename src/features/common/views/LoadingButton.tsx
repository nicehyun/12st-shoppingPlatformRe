import { ReactNode } from "react"
import Button from "./Button"
import Loading from "./Loading"

interface ILoadingButton {
  className?: string
  isLoading: boolean
  onClick: () => void
  content: ReactNode
}

const LoadingButton = ({
  className,
  isLoading,
  onClick,
  content,
}: ILoadingButton) => {
  return (
    <Button
      onClick={onClick}
      isDisabled={isLoading}
      content={
        isLoading ? (
          <Loading
            spinnerSize={{ height: "h-[26px]", width: "w-[26px]" }}
            isFrame={false}
          />
        ) : (
          content
        )
      }
      classNames={className}
    />
  )
}

export default LoadingButton
