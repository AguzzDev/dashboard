import { ArrowSmallDownIcon } from "@heroicons/react/24/outline"
import { IconsSm } from "components/Icons"
import { TripleTableStatsProps } from "interfaces"

export const TripleTable = () => {
  const NumberStats = ({
    title,
    value,
    number,
    desc,
  }: TripleTableStatsProps) => (
    <div className="darkmode w-full rounded-md p-5">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="my-3 flex space-x-5">
        <p className="text-3xl font-bold">{value}</p>
        <div className="flex items-center font-bold">
          <p>{number}</p>
          <div className="fill-current text-red-500">
            <IconsSm Icon={ArrowSmallDownIcon} />
          </div>
        </div>
      </div>
      <h2>{desc}</h2>
    </div>
  )

  return (
    <div className="flex justify-between space-x-4">
      <NumberStats
        title="Ingresos"
        desc="Comparado con el mes anterior"
        value="$2415"
        number="11.4"
      />
      <NumberStats
        title="Ventas"
        desc="Comparado con el mes anterior"
        value="$2415"
        number="11.4"
      />
      <NumberStats
        title="Costos"
        desc="Comparado con el mes anterior"
        value="$2415"
        number="11.4"
      />
    </div>
  )
}
