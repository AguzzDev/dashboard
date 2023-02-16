import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { NotificationDropdown } from "components/Dropdown/NotificationDropdown"

import { IconsXs } from "components/Icons"
import { useTheme } from "context/Darkmode/ThemeProvider"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [loading, setLoading] = useState(true)
  const { toogleTheme, theme } = useTheme()

  useEffect(() => {
    if (theme) {
      setLoading(false)
    }
  }, [])

  return (
    <>
      {!loading && (
        <main className="flex w-full justify-end py-3">
          <div className="flex items-center space-x-5">
            <NotificationDropdown />
            <button onClick={toogleTheme}>
              {theme === "light" ? (
                <IconsXs Icon={SunIcon} props={`dark:text-white text-black`} />
              ) : (
                <IconsXs Icon={MoonIcon} props={`dark:text-white text-black`} />
              )}
            </button>

            <div className="h-10 w-10 rounded-full bg-gray-300" />
          </div>
        </main>
      )}
    </>
  )
}
