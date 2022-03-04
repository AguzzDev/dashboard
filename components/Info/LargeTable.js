import { formatData, statusColor } from "utils/index"

export const LargeTable = ({ title }) => {
  const data = new Array(3).fill({
    name: "User",
    date: new Date("02 Feb 2021"),
    amount: 21000,
    status: "Aprobado",
  })
  return (
    <div className="darkmode p-5">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex mt-3 font-semibold">
        <div className="w-2/6">
          <h1>Usuario</h1>
        </div>
        <div className="w-2/6">
          <h1>Fecha</h1>
        </div>
        <div className="w-1/6">
          <h1>Paga</h1>
        </div>
        <div className="w-1/6">
          <h1 className="text-center">Estado</h1>
        </div>
      </div>
      <div className="flex flex-col">
        {data.map(({ name, date, amount, status }, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-2  space-x-5"
          >
            <div className="flex w-2/6">
              <div className="flex flex-col">
                <h1 className="w-40 truncate">{name}</h1>
              </div>
            </div>
            <div className="w-2/6">
              <p>{formatData(date)}</p>
            </div>
            <div className="w-1/6">
              <p>$ {amount}</p>
            </div>
            <div className="w-1/6 mx-auto">
              <p
                style={{ background: statusColor(status) }}
                className="rounded-xl text-center px-2 dark:text-black text-black`"
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
