import dynamic from "next/dynamic"

const DynamicHeader = dynamic(() => import("@/features/layout/views/Header"), {
  ssr: false,
})

export default DynamicHeader
