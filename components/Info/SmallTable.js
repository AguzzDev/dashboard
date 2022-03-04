export const SmallTable = ({ title }) => {
  const data = new Array(4).fill({
    name: "user",
    email: "user@gmail.com",
  })
  return (
    <div className="p-5 darkmode">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex flex-col">
        {data.map(({ name, email }, i) => (
          <div key={i} className="flex items-center py-2 px-3 space-x-5">
            <p>Hoy</p>
            <div className="flex flex-col">
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
