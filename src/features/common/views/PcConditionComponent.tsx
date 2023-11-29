"use client"

interface IPcConditionComponent {
  component: JSX.Element
}

import { useEffect, useState } from "react"

const PcConditionComponent = ({ component }: IPcConditionComponent) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <>{isMobile && component}</>
}

export default PcConditionComponent
