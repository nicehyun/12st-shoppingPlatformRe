"use client"

import { ReactNode, Suspense } from "react"
import Loading from "./Loading"
interface ISectionSuspense {
  children: ReactNode
  errorMessage?: string
}

const SuspenseIncludingFallback = ({ children }: ISectionSuspense) => {
  return (
    <Suspense
      fallback={
        <Loading
          spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
          height="h-[500px]"
          isFrame={false}
        />
      }
    >
      {children}
    </Suspense>
  )
}

export default SuspenseIncludingFallback
