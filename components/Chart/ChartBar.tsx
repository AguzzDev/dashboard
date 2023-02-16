import { XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts"

import { useDarkMode } from "context/Darkmode/DarkmodeProvider"
import { ChartProps, CustomTooltipProps } from "interfaces"
import { Layout } from "./Layout"

export const ChartBar = ({
  type,
  title,
  data,
  dataKeyX,
  dataKeyY,
}: ChartProps) => {
  const { dark } = useDarkMode()
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="darkmode2 rounded-md p-2">
          <h2>{label}</h2>
          <div>
            {payload.map((pld, i) => (
              <div key={i} className="text-black">
                <p>
                  {type}: {pld.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return null
  }
  return (
    <Layout title={title}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis stroke={dark ? "black" : "white"} dataKey={dataKeyX} />
        <YAxis stroke={dark ? "black" : "white"} dataKey={dataKeyY} />
        <Bar type="monotone" fill="#28c9c6" dataKey={dataKeyY} />
        <Tooltip
          content={<CustomTooltip />}
          contentStyle={{ background: dark ? "F9FAFB" : "gray" }}
          cursor={{ fill: "transparent" }}
        />
      </BarChart>
    </Layout>
  )
}
