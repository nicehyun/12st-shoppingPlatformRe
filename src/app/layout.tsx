import "./globals.css"
import { Roboto } from "next/font/google"
import Providers from "../features/common/utils/Providers"
import FeedbackModal from "@/features/common/views/FeedbackModal"
import Footer from "@/features/layout/views/Footer"
import LayoutSettingDial from "@/features/layout/views/LayoutSettingDial"
import RouteModal from "@/features/common/views/RouteModal"
import { Metadata } from "next"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: { default: "12ST", template: "%s | Shopping Platform" },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={roboto.variable}>
      <body className="relative bg-white text-black dark:text-white dark:bg-black">
        <Providers>
          {children}
          <div id="recaptcha-container"></div>
          <LayoutSettingDial />
          <Footer />

          <RouteModal />
          <FeedbackModal />
        </Providers>
      </body>
    </html>
  )
}
