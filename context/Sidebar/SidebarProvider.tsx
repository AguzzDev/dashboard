import { ChildrenProps } from "interfaces"
import { useContext, useState } from "react"
import SidebarContext from "./SidebarContext"

const SidebarProvider = ({ children }: ChildrenProps) => {
  const [active, setActive] = useState<boolean>(false)

  const toogleMenu = () => {
    setActive(!active)
  }

  return (
    <SidebarContext.Provider value={{ active, setActive, toogleMenu }}>
      {children}
    </SidebarContext.Provider>
  )
}
export const UseSidebar = () => useContext(SidebarContext)
export default SidebarProvider
