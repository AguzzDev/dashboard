import { LayoutChartProps } from "interfaces"
import { useRouter } from "next/router"
import { ResponsiveContainer } from "recharts"

export const Layout = ({
  title,
  children,
}: LayoutChartProps) => {
  const { pathname } = useRouter()

  return (
    <div className="darkmode mt-5 overflow-hidden rounded-md p-5">
      <h1 className="mb-2 text-xl font-semibold">{title}</h1>

      <ResponsiveContainer
        width="100%"
        height="100%"
        aspect={pathname === "/analiticas" ? 4 / 2 : 4 / 1}
      >
        {children}
      </ResponsiveContainer>
    </div>
  )
}
