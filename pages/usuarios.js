import { TrashIcon } from "@heroicons/react/outline"
import { IconsXs } from "components/Icons"
import Layout from "components/Layout/Layout"
import useTable from "hooks/useTable"
import { Table } from "components/Table/Table"

export default function Usuarios() {
  const userData = new Array(5).fill({
    id: "1",
    name: "User",
    email: "user@gmail.com",
  })

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Acciones",
        Header: "Acciones",
        Cell: ({ row }) => (
          <button
            onClick={() => deleteRow(row)}
            className="flex justify-center w-6/12 py-2 bg-gray-200 dark:bg-gray-700 rounded-full bg-opacity-70"
          >
            <IconsXs Icon={TrashIcon} />
            <h1 className="ml-1 font-semibold">Eliminar Cuenta</h1>
          </button>
        ),
      },
    ])
  }
  const { dataValues, columnData, deleteRow } = useTable(userData)

  return (
    <>
      <Layout title="Usuarios - Dashboard">
        <main className="mx-5 mt-3">
          <Table columns={columnData} data={dataValues} hooks={tableHooks} />
        </main>
      </Layout>
    </>
  )
}
