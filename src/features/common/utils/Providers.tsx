import ReduxProvider from "@/redux/utils/ReduxProvider"

import TanstackQueryProvider from "../../../tanstackQuery/utils/TanstackQueryProvider"
import Sessionprovider from "../views/SessionProvider"
import Themeprovider from "../views/ThemeProvider"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  return (
    <TanstackQueryProvider>
      <Sessionprovider>
        <ReduxProvider>
          <Themeprovider>{children}</Themeprovider>
        </ReduxProvider>
      </Sessionprovider>
    </TanstackQueryProvider>
  )
}

export default Providers
