import { createContext } from "react"

interface DarkmodeProps {
  dark: boolean
  toogleDarkMode: () => void
}
const DarkmodeContext = createContext<DarkmodeProps>({
  dark: true,
  toogleDarkMode: () => {},
})

export default DarkmodeContext
