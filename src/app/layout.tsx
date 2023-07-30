import "./globals.css"

import { Roboto } from "next/font/google"
import Providers from "./Providers"
import ThemeSwitcher from "./ThemeSwitcher"
import Header from "./layout/Organisms/Header"
import MNavgation from "./layout/Organisms/MNavgation"

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
        </Providers>
      </body>
    </html>
  )
}
