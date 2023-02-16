import { TitleProps } from "interfaces"
import { formatDate, statusColor } from "utils/index"

export const LargeTable = ({ title }:TitleProps) => {
  const data = new Array(3).fill({
    name: "User",
    date: new Date("02 Feb 2021"),
    amount: 21000,
    status: "Aprobado",
  })
  return (
    <div className="darkmode p-5">
      <h2 className="font-semibold">{title}</h2>

      <div className="mt-3 flex font-semibold">
        <div className="w-2/6">
          <h3>Usuario</h3>
        </div>
        <div className="w-2/6">
          <h3>Fecha</h3>
        </div>
        <div className="w-1/6">
          <h3>Paga</h3>
        </div>
        <div className="w-1/6">
          <h3 className="text-center">Estado</h3>
        </div>
      </div>
      <div className="flex flex-col">
        {data.map(({ name, date, amount, status }, i) => (
          <div
            key={i}
            className="flex items-center justify-between space-x-5 py-2"
          >
            <div className="flex w-2/6">
              <div className="flex flex-col">
                <h3 className="w-40 truncate">{name}</h3>
              </div>
            </div>
            <div className="w-2/6">
              <p>{formatDate(date)}</p>
            </div>
            <div className="w-1/6">
              <p>$ {amount}</p>
            </div>
            <div className="mx-auto w-1/6">
              <p
                style={{ background: statusColor(status) }}
                className="text-black` rounded-xl px-2 text-center dark:text-black"
              >
                {status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
