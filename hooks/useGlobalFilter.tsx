import { useState } from "react"
import { useAsyncDebounce } from "react-table"
import "regenerator-runtime"

export const GlobalFilter = ({ globalFilter, setGlobalFilter }:any) => {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  return (
    <input
      className="my-3 w-2/6 rounded-md border border-gray-100 bg-gray-200 px-3 py-2 dark:border-gray-800 dark:bg-gray-700"
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      placeholder="Busca en la tabla"
    />
  )
}
