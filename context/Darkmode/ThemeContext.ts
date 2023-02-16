import { createContext } from "react"

interface ThemeProps {
  theme: string
  toogleTheme: () => void
}
const ThemeContext = createContext<ThemeProps>({
  theme: "",
  toogleTheme: () => {},
})

export default ThemeContext
