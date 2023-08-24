import "./globals.css"

import { Roboto } from "next/font/google"
import Providers from "../common/utils/Providers"

import MNavgation from "../features/layout/views/mobile/MNavgation"
import Header from "@/features/layout/views/Header"
import Footer from "@/features/layout/views/Footer"
import FeedbackModal from "@/common/views/FeedbackModal"

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
          <Header />
          {children}
          <div id="recaptcha-container"></div>
          <MNavgation />

          <FeedbackModal />

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
