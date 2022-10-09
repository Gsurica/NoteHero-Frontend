import { Button } from "../../shared/components/Button/Button";
import { Layout } from "../../shared/layout/Layout";
import { ProjectList } from "./components/ProjectList";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../contexts/hooks/useAppContext";


export const Home: React.FC = () => {

  const { user_id } = useParams();
  const redirect = useNavigate();
  const { state } = useAppContext();
  console.log(state);

  return (
    <Layout phrase="Hello! Welcome to the Note Hero!">
      <div className="flex items-center justify-center p-6">
        <Button onClick={() => redirect(`/project/${user_id}`)}  name="create a project!" />
      </div>
      <div>
        <ProjectList />
      </div>
    </Layout>
  )
}

