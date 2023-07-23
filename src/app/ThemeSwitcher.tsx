"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <p>now theme : {theme}</p>
      <button onClick={() => setTheme("light")}>light mode</button>
      <button onClick={() => setTheme("dark")}>dark mode</button>
    </div>
  )
}

export default ThemeSwitcher
