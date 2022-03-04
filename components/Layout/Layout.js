import Head from "next/head"
import { useContext } from "react"

import Navbar from "components/Navbar/Navbar"
import Sidebar from "components/Navbar/Sidebar"
import SidebarContext from "context/Sidebar/SidebarContext"

export default function Layout({ children, title }) {
  const { active } = useContext(SidebarContext)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="flex w-full">
        <Sidebar />

        <section className={`${active ? "w-10/12" : "w-full"}`}>
          <Navbar />
          {children}
        </section>
      </main>
    </>
  )
}
