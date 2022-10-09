import { Layout } from "../../shared/layout/Layout"
import { RelatoriesList } from "./components/RelatoriesList"

export const Relatories = () => {
  return (
    <div>
      <Layout phrase="Relatories! Look for your hours!">
        <RelatoriesList />
      </Layout>
    </div>
  )
}
