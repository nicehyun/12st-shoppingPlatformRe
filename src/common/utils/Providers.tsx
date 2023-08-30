import ReduxProvider from "@/redux/utils/ReduxProvider"

import ReactQueryProvider from "../../reactQuery/utils/ReactQueryProvider"
import Sessionprovider from "./SessionProvider"
import Themeprovider from "./ThemeProvider"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  return (
    <ReactQueryProvider>
      <Sessionprovider>
        <ReduxProvider>
          <Themeprovider>{children}</Themeprovider>
        </ReduxProvider>
      </Sessionprovider>
    </ReactQueryProvider>
  )
}

export default Providers
