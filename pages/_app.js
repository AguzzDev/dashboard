import DarkmodeProvider from "context/Darkmode/DarkmodeProvider"
import SidebarProvider from "context/Sidebar/SidebarProvider"
import { Toaster } from "react-hot-toast"
import "styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <DarkmodeProvider>
      <SidebarProvider>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </SidebarProvider>
    </DarkmodeProvider>
  )
}

export default MyApp
