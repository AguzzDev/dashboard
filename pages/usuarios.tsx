import type { NextPage } from "next"

import { TrashIcon } from "@heroicons/react/24/outline"
import { IconsXs } from "components/Icons"
import Layout from "components/Layout/Layout"
import useTable from "hooks/useTable"
import { Table } from "components/Table/Table"
import { AddOrEditModal } from "components/Modal/Modal"

const Usuarios: NextPage = () => {
  const userData = new Array(5).fill({
    nombre: "User",
    email: "user@gmail.com",
  })

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      ...columns,
      {
        id: "Acciones",
        Header: "Acciones",
        Cell: ({ row }: any) => (
          <div className="flex space-x-5">
            <AddOrEditModal
              option="edit"
              type="user"
              row={row}
              editRow={editRow}
            />

            <button
              onClick={() => deleteRow(row)}
              className="flex items-center justify-center rounded-full bg-gray-200  bg-opacity-70 px-3 py-1 dark:bg-gray-700"
            >
              <IconsXs Icon={TrashIcon} />
              <h3 className="ml-1 font-semibold">Eliminar</h3>
            </button>
          </div>
        ),
      },
    ])
  }
  const { dataValues, columnData, deleteRow, addRow, editRow } = useTable(
    userData.map((v, i) => {
      return {
        id: i + 1,
        ...v,
      }
    })
  )

  return (
    <>
      <Layout title="Usuarios">
        <div className="mb-2">
          <h1>Panel de Usuarios</h1>
        </div>

        <Table
          columns={columnData}
          data={dataValues}
          hooks={tableHooks}
          addRow={addRow}
          type="user"
        />
      </Layout>
    </>
  )
}

export default Usuarios
