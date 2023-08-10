import "./globals.css"

import { Roboto } from "next/font/google"
import Providers from "../common/utils/Providers"
import ThemeSwitcher from "../common/utils/ThemeSwitcher"

import MNavgation from "../features/layout/views/MNavgation"
import Header from "@/features/layout/views/Header"
import Footer from "@/features/layout/views/Footer"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={roboto.className}>
      <body className="bg-white text-black dark:text-white dark:bg-black">
        <Providers>
          <ThemeSwitcher />

          <Header />
          {children}

          <MNavgation />

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
