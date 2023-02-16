import type { GetStaticProps, NextPage } from "next"

import { ChartBar } from "components/Chart"
import { TripleTable } from "components/Info/TripleTable"
import { SmallTable } from "components/Info/SmallTable"
import Layout from "components/Layout/Layout"
import { userYear } from "data"
import { LargeTable } from "components/Info/LargeTable"

const Home: NextPage = () => {
  return (
    <Layout title="Inicio">
      <div>
        <TripleTable />
        <ChartBar
          title="Analitica de usuarios este año"
          data={userYear}
          dataKeyY="value"
          dataKeyX="name"
          type="Usuarios"
        />
      </div>

      <div className="mt-5 flex space-x-5">
        <div className="w-4/12">
          <SmallTable title="Ultimos usuarios" />
        </div>
        <div className="w-8/12">
          <LargeTable title="Ultimas Transacciones" />
        </div>
      </div>
    </Layout>
  )
}

export default Home
