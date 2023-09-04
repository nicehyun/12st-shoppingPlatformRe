"use client"

import { useEffect, useState } from "react"

interface IMobileConditionContainer {
  component: JSX.Element
  type: "mobile" | "pc"
}

const ViewPortConditionComponent = ({
  component,
  type,
}: IMobileConditionContainer) => {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    const handleResize = () => {
      if (type === "mobile") {
        setIsMobile(window.innerWidth <= 767)
        return
      }
      setIsMobile(window.innerWidth >= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <>{isMobile && component}</>
}

export default ViewPortConditionComponent
