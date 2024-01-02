"use client"

import { ReactNode } from "react"
import Loading from "./Loading"
import { QueryErrorBoundary } from "@suspensive/react-query"
import { Suspense } from "@suspensive/react"
import Error from "./Error"
interface ISectionSuspense {
  children: ReactNode
  errorMessage?: string
}

const SectionSuspense = ({
  children,
  errorMessage = "오류가 계속되면 고객센터에 문의해주세요.",
}: ISectionSuspense) => {
  return (
    <QueryErrorBoundary fallback={<Error errorMessage={errorMessage} />}>
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
    </QueryErrorBoundary>
  )
}

export default SectionSuspense
