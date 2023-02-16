import { ChildrenProps } from "interfaces"
import { parseCookies, setCookie } from "nookies"
import { useContext, useEffect } from "react"
import { useState } from "react"
import DarkmodeContext from "./DarkmodeContext"

const DarkmodeProvider = ({ children }: ChildrenProps) => {
  const [dark, setDark] = useState(true)
  const { colorTheme } = parseCookies()

  const toogleDarkMode = () => {
    setDark(!dark)

    if (dark) {
      setCookie(null, "colorTheme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setCookie(null, "colorTheme", "light")
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    if (colorTheme === "dark") {
      setCookie(null, "colorTheme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setCookie(null, "colorTheme", "light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <DarkmodeContext.Provider value={{ toogleDarkMode, dark }}>
      {children}
    </DarkmodeContext.Provider>
  )
}
export const useDarkMode = () => useContext(DarkmodeContext)
export default DarkmodeProvider
