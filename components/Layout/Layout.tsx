import Head from "next/head"
import { motion } from "framer-motion"

import Navbar from "components/Navbar/Navbar"
import Sidebar from "components/Navbar/Sidebar"
import { UseSidebar } from "context/Sidebar/SidebarProvider"
import { ChildrenProps, TitleProps } from "interfaces"

export default function Layout({
  children,
  title,
}: ChildrenProps & TitleProps) {
  const { active } = UseSidebar()
  return (
    <>
      <Head>
        <title>{title ? `${title} | Dashboard` : null}</title>
      </Head>

      <main className="flex">
        <section
          className={`${active ? "w-2/12" : "w-40"} duration-1000 ease-in`}
        >
          <Sidebar />
        </section>

        <section className={`${active ? "w-10/12" : "w-full"}`}>
          <section className="mx-5 mb-5">
            <Navbar />
            {children}
          </section>
        </section>
      </main>
    </>
  )
}
