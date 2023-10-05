"use client"

import Button from "@/common/views/Button"
import { useState } from "react"

const GenderSwicher = () => {
  const [gender, setGender] = useState("all")

  const chageGender = () => {
    if (gender === "all") {
      setGender("male")
    }

    if (gender === "male") {
      setGender("female")
    }

    if (gender === "female") {
      setGender("all")
    }

    return
  }

  return gender === "all" ? (
    <Button classNames="text-[12px]" content="전체" onClick={chageGender} />
  ) : gender === "male" ? (
    <Button classNames="text-[12px]" content="남성" onClick={chageGender} />
  ) : (
    <Button classNames="text-[12px]" content="여성" onClick={chageGender} />
  )
}

export default GenderSwicher
