import ReduxProvider from "@/redux/utils/ReduxProvider"
import ReactQueryProvider from "../../reactQuery/utils/ReactQueryProvider"
import Themeprovider from "./ThemeProvider"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <Themeprovider>{children}</Themeprovider>
      </ReduxProvider>
    </ReactQueryProvider>
  )
}

export default Providers
