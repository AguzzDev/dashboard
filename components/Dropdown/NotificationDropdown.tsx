import { Menu, Transition } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/24/outline"
import { IconsXs } from "components/Icons"
import { Fragment } from "react"

export const NotificationDropdown = () => {
  return (
    <Menu as="div" className="relative flex items-center">
      <Menu.Button>
        <IconsXs Icon={BellIcon} props={`dark:text-white text-black`} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{
            position: "absolute",
            top: "0%",
            left: "-50%",
            transform: "translate(-50%,50%)",
          }}
          className="darkmode2 rounded-sm p-2"
        >
          <h2>Sin notificaciones</h2>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
