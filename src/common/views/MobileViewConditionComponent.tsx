"use client"

import { useEffect, useState } from "react"

interface IMobileViewConditionComponent {
  component: JSX.Element
}

const MobileViewConditionComponent = ({
  component,
}: IMobileViewConditionComponent) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <>{isMobile && component}</>
}

export default MobileViewConditionComponent
