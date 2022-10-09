import { Layout } from "../../shared/layout/Layout"
import { ProjectForm } from "./components/ProjectForm"

export const Project = () => {
  return (
    <Layout phrase="Project Form">
      <div>
        <ProjectForm />
      </div>
    </Layout>
  )
}
