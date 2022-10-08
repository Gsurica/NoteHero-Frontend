import { Button } from "../../shared/components/Button/Button";
import { Layout } from "../../shared/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { CollabList } from "../collabs/components/CollabList";

export const Collab: React.FC = () => {

  const { user_id } = useParams();

  const redirect = useNavigate();

  return (
    <Layout phrase="Hello! Welcome to the Note Hero!">
      <div className="flex items-center justify-center p-6">
        <Button onClick={() => redirect(`/collab_register/${user_id}`)}  name="register a collab" />
      </div>
      <div>
        <CollabList />
      </div>
    </Layout>
  )
}