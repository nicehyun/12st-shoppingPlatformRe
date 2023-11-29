import { ReactNode, Suspense } from "react"
import Loading from "./Loading"

interface ISuspenseWithFallback {
  children: ReactNode
}

const SuspenseWithFallback = ({ children }: ISuspenseWithFallback) => {
  return (
    <Suspense
      fallback={
        <Loading
          spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
          height="h-[400px]"
          isFrame={false}
        />
      }
    >
      {children}
    </Suspense>
  )
}

export default SuspenseWithFallback
