import { ChildrenProps } from "interfaces"
import { parseCookies, setCookie } from "nookies"
import { useState, useContext, useEffect } from "react"

import ThemeContext from "./ThemeContext"

const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<string>("")
  const { colorTheme } = parseCookies()

  const toogleTheme = () => {
    if (theme === "light") {
      setCookie(null, "colorTheme", "dark")
      document.documentElement.classList.add("dark")
      setTheme(document.documentElement.classList.value)
    } else {
      setCookie(null, "colorTheme", "light")
      document.documentElement.classList.remove("dark")
      setTheme(document.documentElement.classList.value)
    }
  }

  useEffect(() => {
    if (!colorTheme) {
      setCookie(null, "colorTheme", "light")
    }
    document.documentElement.classList.add(colorTheme)
    setTheme(document.documentElement.classList.value)
  }, [colorTheme])

  return (
    <ThemeContext.Provider value={{ toogleTheme, theme: colorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext)
export default ThemeProvider
