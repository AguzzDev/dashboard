import { TrashIcon } from "@heroicons/react/outline"
import { IconsXs } from "components/Icons"
import Layout from "components/Layout/Layout"
import useTable from "hooks/useTable"
import { Modal } from "components/Modal/Modal"
import { Table } from "components/Table/Table"

export default function Productos() {
  const productsData = new Array(7).fill({
    id: 1,
    producto: "Remera",
    precio: 109.95,
    descripcion: "Descripcion",
    categoria: "Remera",
  })
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Acciones",
        Header: "Acciones",
        Cell: ({ row }) => (
          <div className="flex space-x-5">
            <Modal row={row} addRow={addRow} />

            <button
              onClick={() => deleteRow(row)}
              className="bg-gray-200 dark:bg-gray-700 bg-opacity-70 rounded-full w-[180px]  p-2 flex justify-center"
            >
              <IconsXs Icon={TrashIcon} />
              <h1 className="ml-1 font-semibold">Eliminar Producto</h1>
            </button>
          </div>
        ),
      },
    ])
  }
  const { dataValues, columnData, deleteRow, addRow } = useTable(productsData)
  return (
    <>
      <Layout title="Productos - Dashboard">
        <main className="mx-5 mt-3">
          <Table columns={columnData} data={dataValues} hooks={tableHooks} />
        </main>
      </Layout>
    </>
  )
}
