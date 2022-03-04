import { useState } from "react"
import { useMemo } from "react"

export default function useTable(data) {
  const [dataValues, setDataValues] = useState(useMemo(() => data, []))

  const columnData = useMemo(
    () =>
      dataValues
        ? Object.keys(dataValues[0]).map((key) => {
            return { Header: key, accessor: key }
          })
        : [],
    [dataValues]
  )

  const deleteRow = (row) => {
    const dataCopy = [...dataValues]
    dataCopy.splice(row.id, 1)
    setDataValues(dataCopy)
  }

  const addRow = (row) => {
    console.log(row)
    console.log(dataValues)
    // setDataValues(prevState => [...prevState, row])
  }

  return { dataValues, columnData, deleteRow, addRow }
}
