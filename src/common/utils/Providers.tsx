import ReactQueryProvider from "./ReactQueryProvider"
import Themeprovider from "./ThemeProvider"

interface IProviders {
  children: React.ReactNode
}

const Providers = ({ children }: IProviders) => {
  return (
    <ReactQueryProvider>
      <Themeprovider>{children}</Themeprovider>
    </ReactQueryProvider>
  )
}

export default Providers
