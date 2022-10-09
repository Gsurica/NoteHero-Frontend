import { Button } from "../../../shared/components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";

interface TaskCardProps {
  task: any;
  taskId: string;
  taskName: string;
  taskDescription: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ taskDescription, taskId, taskName, task }) => {

  const redirect = useNavigate();

  const { user_id, project_id } = useParams();

  return (
    <div className="bg-slate-400" key={ taskId }>
      <div className="flex items-center justify-center mt-6 text-white">
        <h1 className="md:text-4xl mb-4 mt-4">{ taskName }</h1>
      </div>
      <div className="flex items-center justify-center p-2">
        <p className="tracking-wide bg-white p-2 md:text-3xl">{ taskDescription }</p>
      </div>
        <div className="mt-2 mb-2 flex items-center justify-center">
          <Button name="View Task!" onClick={() => redirect(`/tasks/${user_id}/${project_id}/${taskId}`)} className="md:text-2xl" />
        </div>
        { task.collaborator.length === 0 ? (
          <div className="flex items-center justify-center flex-col">
            <p className="text-white tracking-widest">No collaborators yet! :(</p>
          </div>
        ): (
          <div className="flex items-center flex-col">
            <div className="flex items-center mb-4 mt-4 text-white">
              <h1 className="tracking-widest">Collaborators: </h1>
            </div>
            <div>
              { task.collaborator?.map((collaborator: any) => {
                return (
                  <div>
                    <div key={ collaborator.id } className="text-orange-200">
                      <p className="text-lg mb-4 p-2 bg-slate-600">{ collaborator.name }</p>
                    </div>
                  </div>
                )
              }) }
            </div>
          </div>
        ) }
    </div>
  )
}
