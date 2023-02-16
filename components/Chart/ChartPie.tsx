import { Tooltip, Pie, PieChart } from "recharts"
import { ChartProps } from "interfaces"

import { Layout } from "./Layout"
import { useTheme } from "context/Darkmode/ThemeProvider"

export const ChartPie = ({ title, data, dataKeyX, dataKeyY }: ChartProps) => {
  const { theme } = useTheme()
  return (
    <Layout title={title}>
      <PieChart>
        <Pie
          data={data}
          dataKey={dataKeyY}
          nameKey={dataKeyX}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill="#82ca9d"
          label
        />

        <Tooltip
          contentStyle={{ background: theme === "light" ? "F9FAFB" : "gray" }}
          cursor={{ fill: "transparent" }}
        />
      </PieChart>
    </Layout>
  )
}
