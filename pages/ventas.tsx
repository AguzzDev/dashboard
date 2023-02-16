import useTable from "hooks/useTable"
import { NextPage } from "next"

import { formatDate, formatMoney } from "utils"
import Layout from "components/Layout/Layout"
import { Table } from "components/Table/Table"

const Ventas: NextPage = () => {
  const productsData = new Array(7).fill({
    nombre: "User",
    fecha: formatDate(new Date()),
    producto: "Name Product",
    precio: formatMoney(21000),
    estado: "Aprobado",
  })
  const { dataValues, columnData } = useTable(
    productsData.map((v, i) => {
      return {
        id: i + 1,
        ...v,
      }
    })
  )

  return (
    <Layout title="Ventas">
      <div className="mb-2">
        <h1>Panel de Ventas</h1>
      </div>

      <Table
        type="ventas"
        data={dataValues}
        columns={columnData}
        hooks={() => {}}
      />
    </Layout>
  )
}

export default Ventas
