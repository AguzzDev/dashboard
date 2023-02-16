import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from "recharts"

import { ChartProps } from "interfaces"
import { Layout } from "./Layout"
import { useTheme } from "context/Darkmode/ThemeProvider"

export const ChartLine = ({ title, data, dataKeyX, dataKeyY }: ChartProps) => {
  const { theme } = useTheme()

  return (
    <Layout title={title}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis stroke={theme === "light" ? "black" : "white"} dataKey={dataKeyX} />
        <YAxis stroke={theme === "light" ? "black" : "white"} dataKey={dataKeyY} />
        <Line type="monotone" fill="#28c9c6" dataKey={dataKeyY} />
        <Tooltip
          contentStyle={{ background: theme === "light" ? "F9FAFB" : "gray" }}
          cursor={{ fill: "transparent" }}
        />
      </LineChart>
    </Layout>
  )
}
