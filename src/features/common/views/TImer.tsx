"use client"

import { useEffect, useState } from "react"
import { formatTime } from "../utils/time"

export interface ITimer {
  seconds: number
  onTimeExpire?: () => void
  position?: {
    right?: string
    left?: string
    top?: string
    bottom?: string
  }
}

const Timer = ({
  seconds,
  onTimeExpire,
  position = {
    right: "right-0",
    left: "left-0",
    top: "top-0",
    bottom: "bottom-0",
  },
}: ITimer) => {
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    if (time < 0) return

    if (time === 0 && onTimeExpire) {
      onTimeExpire()
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [time, onTimeExpire])

  return (
    <span
      className={`absolute ${position.right} ${position.left} ${position.top} ${position.bottom} text-lightRed text-[14px]`}
    >
      {formatTime(time)}
    </span>
  )
}

export default Timer
