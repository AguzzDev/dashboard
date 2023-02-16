import type { AppProps } from "next/app"

import SidebarProvider from "context/Sidebar/SidebarProvider"
import { Toaster } from "react-hot-toast"
import "styles/globals.css"
import ThemeProvider from "context/Darkmode/ThemeProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default MyApp
