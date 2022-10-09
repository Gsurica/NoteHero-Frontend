import { Button } from "../../shared/components/Button/Button";
import { Layout } from "../../shared/layout/Layout";
import { ProjectList } from "./components/ProjectList";
import { useAppContext } from "../../contexts/hooks/useAppContext";
import { ProjectModal } from "../../shared/components/modal/ProjectModal/ProjectModal";


export const Home: React.FC = () => {

  const { state, ShowModal, CloseModal } = useAppContext();
  console.log(state);

  return (
    <>
      { state.modal && (
        <ProjectModal modalTitle="Create your project!" closeModal={() => CloseModal()} />
      ) }
      <Layout phrase="Hello! Welcome to the Note Hero!">
        <div className="md:w-full md:flex md:justify-center md:items-center flex items-center justify-center p-6">
          <Button onClick={() => {
            ShowModal()
          }}  name="create a project!" className="md:w-60 md:text-2xl" />
        </div>
        <div>
          <ProjectList />
        </div>
      </Layout>
    </>
  )
}

