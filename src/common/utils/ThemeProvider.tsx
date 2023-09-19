"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

interface IThemeProvider {
  children: React.ReactNode
}

const Themeprovider = ({ children }: IThemeProvider) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Themeprovider
