"use client"

import { useEffect, useState } from "react"
import { formatTime } from "../models/time"

export interface ITimer {
  seconds: number
  onTimeExpire?: () => void
}

const Timer = ({ seconds, onTimeExpire }: ITimer) => {
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
      className={`absolute right-[15px] top-1/2 -translate-y-1/2 text-lightRed text-[14px]`}
    >
      {formatTime(time)}
    </span>
  )
}

export default Timer
