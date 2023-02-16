import { createContext, Dispatch, SetStateAction } from "react"

export interface SidebarProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  toogleMenu: () => void
}

const SidebarContext = createContext<SidebarProps>({
  active: false,
  setActive: () => {},
  toogleMenu: () => {},
})

export default SidebarContext
