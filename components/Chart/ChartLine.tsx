import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from "recharts"

import { useDarkMode } from "context/Darkmode/DarkmodeProvider"
import { ChartProps } from "interfaces"
import { Layout } from "./Layout"

export const ChartLine = ({ title, data, dataKeyX, dataKeyY }: ChartProps) => {
  const { dark } = useDarkMode()

  return (
    <Layout title={title}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis stroke={dark ? "black" : "white"} dataKey={dataKeyX} />
        <YAxis stroke={dark ? "black" : "white"} dataKey={dataKeyY} />
        <Line type="monotone" fill="#28c9c6" dataKey={dataKeyY} />
        <Tooltip
          contentStyle={{ background: dark ? "F9FAFB" : "gray" }}
          cursor={{ fill: "transparent" }}
        />
      </LineChart>
    </Layout>
  )
}
