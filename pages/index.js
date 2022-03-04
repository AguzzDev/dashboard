import { Charts } from "components/Chart/Charts"
import { TripleTable } from "components/Info/TripleTable"
import { SmallTable } from "components/Info/SmallTable"
import Layout from "components/Layout/Layout"
import userChart from "data/Chart"
import { LargeTable } from "components/Info/LargeTable"

export default function Home() {
  return (
    <>
      <Layout title="Inicio - Dashboard">
        <main className="w-full px-5">
          <TripleTable />
          <Charts
            title="Analitica de usuarios"
            data={userChart}
            dataKey="Usuarios Registrados"
          />

          <div className="flex space-x-5 mt-5">
            <div className="w-4/12">
              <SmallTable title="Ultimos usuarios" />
            </div>
            <div className="w-8/12">
              <LargeTable title="Ultimas Transacciones" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
