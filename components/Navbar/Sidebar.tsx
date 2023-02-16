import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"

import { IconCustom } from "components/Icons"
import { SidebarData } from "data"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { NavItemProps } from "interfaces"
import { UseSidebar } from "context/Sidebar/SidebarProvider"

export default function Sidebar() {
  const { active, toogleMenu } = UseSidebar()
  const { pathname } = useRouter()

  const NavItem = (props: NavItemProps) => (
    <Link href={props.path}>
      <button
        className={`${
          pathname === `${props.path}` && "bg-gray-200 dark:bg-gray-700"
        } ${
          active && "w-full"
        } flex items-center justify-center rounded-md py-2 px-3 lg:justify-start`}
      >
        <IconCustom
          Icon={props.icon}
          props={`${active ? "w-6" : "w-7"} dark:text-white text-black`}
        />
        {active && (
          <h2 className="hidden pl-3 text-sm lg:block xl:text-xl">
            {props.title}
          </h2>
        )}
      </button>
    </Link>
  )
  return (
    <main className="borderColors sticky top-0 flex flex-col border-r bg-gray-50 bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-40">
      <div
        className={`${
          active && "px-5"
        } flex h-screen flex-col justify-between py-2`}
      >
        <div
          className={`flex ${
            !active ? "justify-center" : "justify-start"
          } mt-2`}
        >
          <button
            onClick={toogleMenu}
            className="rounded-md p-2 duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {active ? (
              <IconCustom
                Icon={ArrowLeftIcon}
                props={`${active ? "w-6" : "w-7"} dark:text-white text-black`}
              />
            ) : (
              <IconCustom
                Icon={ArrowRightIcon}
                props={`${active ? "w-6" : "w-7"} dark:text-white text-black`}
              />
            )}
          </button>
        </div>
        <div
          className={`${
            !active && "items-center"
          } mt-10 flex h-full flex-col space-y-3`}
        >
          {SidebarData.map((props, i) => (
            <NavItem key={i} {...props} />
          ))}
        </div>
      </div>
    </main>
  )
}
