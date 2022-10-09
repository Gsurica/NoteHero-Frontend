import { useParams, useNavigate } from "react-router-dom";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectFirstTask: string;
  projectDate: string;
  projectId: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectDescription, projectTitle, projectFirstTask, projectDate, projectId }) => {

  const redirect = useNavigate();

  const { user_id } = useParams();

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => redirect(`/projects/${user_id}/${projectId}`)}>
        <div className="p-4">
          <div className="bg-slate-600 md:w-96 hover:scale-110 shadow-xl transition-all p-4 flex flex-col mb-5">
            <div className="text-white">
              <h1>{ projectTitle }</h1>
              <p>{ projectDescription }</p>
              <p>{ projectFirstTask }</p>
              <div>
                <p>{ projectDate }</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
