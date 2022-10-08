import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {

  const [project, setProject] = useState<any>([]);

  const token = localStorage.getItem('tokenAccess');

  const { user_id, project_id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3333/projects/${user_id}/${project_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
    .then(response => {
      console.log('project details', response.data);
      setProject(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      { project.tasks?.map((task: any) => {
        return (
          <TaskCard 
            key={ task.id }
            task={ task }
            taskDescription={ task.description }
            taskId={ task.id }
            taskName={ task.name }
          />
        )
      }) }
    </div>
  )
}
