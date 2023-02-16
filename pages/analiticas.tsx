import { ChartBar } from "components/Chart"
import Layout from "components/Layout/Layout"
import { userYear, sellMonth, sellYear } from "data"
import { userMonth } from "data/userMonth"
import { NextPage } from "next"

const Analiticas: NextPage = () => {
  return (
    <Layout title="Analiticas">
      <h1>Panel de Analiticas</h1>
      <div className="grid grid-cols-2 gap-5">
        <ChartBar
          data={userMonth}
          title="Analitica de usuarios este mes"
          dataKeyX="name"
          dataKeyY="value"
          type="Usuarios"
        />
        <ChartBar
          data={userYear}
          title="Analitica de usuarios totales"
          dataKeyX="name"
          dataKeyY="value"
          type="Usuarios"
        />
        <ChartBar
          data={sellMonth}
          title="Analitica de ventas este mes"
          dataKeyX="name"
          dataKeyY="value"
          type="Ventas"
        />
        <ChartBar
          data={sellYear}
          title="Analitica de ventas totales"
          dataKeyX="name"
          dataKeyY="value"
          type="Ventas"
        />
      </div>
    </Layout>
  )
}

export default Analiticas
