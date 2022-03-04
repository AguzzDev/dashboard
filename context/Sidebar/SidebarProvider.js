import { useState } from "react"
import SidebarContext from "./SidebarContext"

const SidebarProvider = ({ children }) => {
  const [active, setActive] = useState(false)

  const toogleMenu = () => {
    setActive(!active)
  }

  return (
    <SidebarContext.Provider value={{ active, setActive, toogleMenu }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
