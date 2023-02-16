import { useState, useMemo } from "react"

export default function useTable(data: string[]) {
  const [dataValues, setDataValues] = useState(useMemo(() => data, []))

  const columnData = useMemo(() => {
    return dataValues
      ? Object.keys(dataValues[0]).map((key) => {
          return { Header: key, accessor: key }
        })
      : []
  }, [dataValues])

  const deleteRow = (row: any) => {
    const dataCopy = [...dataValues]
    dataCopy.splice(row.id, 1)
    setDataValues(dataCopy)
  }

  const addRow = (row: any) => {
    setDataValues((prevState: any) => [...prevState, row])
  }

  const editRow = (row: any) => {
    const data = dataValues.filter(({ id }: any) => id != row.id)
    setDataValues([...data, row])
  }

  return { dataValues, columnData, deleteRow, addRow, editRow }
}
