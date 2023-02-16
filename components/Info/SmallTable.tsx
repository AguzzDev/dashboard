import { TitleProps } from "interfaces"

export const SmallTable = ({ title }: TitleProps) => {
  const data = new Array(4).fill({
    name: "user",
    email: "user@gmail.com",
  })
  return (
    <div className="darkmode p-5">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex flex-col">
        {data.map(({ name, email }, i) => (
          <div key={i} className="flex items-center space-x-5 py-2 px-3">
            <p>Hoy</p>
            <div className="flex flex-col">
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
