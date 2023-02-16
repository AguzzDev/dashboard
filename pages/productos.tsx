import type { NextPage } from "next"

import { TrashIcon } from "@heroicons/react/24/outline"
import { IconsXs } from "components/Icons"
import Layout from "components/Layout/Layout"
import useTable from "hooks/useTable"
import { AddOrEditModal } from "components/Modal/Modal"
import { Table } from "components/Table/Table"
import { formatMoney } from "utils"

const Productos: NextPage = () => {
  const productsData = new Array(7).fill({
    nombre: "Name",
    categoria: "Remera",
    precio: formatMoney(230),
    descripcion: "Descripcion",
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
              type="product"
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
    productsData.map((v, i) => {
      return {
        id: i + 1,
        ...v,
      }
    })
  )

  return (
    <>
      <Layout title="Productos">
        <div className="mb-2">
          <h1>Panel de Productos</h1>
        </div>

        <Table
          columns={columnData}
          data={dataValues}
          hooks={tableHooks}
          addRow={addRow}
          type="product"
        />
      </Layout>
    </>
  )
}

export default Productos
