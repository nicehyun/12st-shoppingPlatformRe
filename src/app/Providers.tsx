"use client"
import { ThemeProvider } from "next-themes"
import React, { useEffect, useState } from "react"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Providers
