"use client"
import Button from "@/common/views/Button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (theme === "light")
    return <Button onClick={() => setTheme("dark")} content={<MdDarkMode />} />

  return <Button onClick={() => setTheme("light")} content={<MdLightMode />} />
}

export default ThemeSwitcher
