import AuthenticationCheck from "@/features/auth/signIn/views/AuthenticationCheck"

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
          <Themeprovider>
            <AuthenticationCheck />
            {children}
          </Themeprovider>
        </ReduxProvider>
      </Sessionprovider>
    </TanstackQueryProvider>
  )
}

export default Providers
