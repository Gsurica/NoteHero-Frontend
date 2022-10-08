import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ProjectCard } from './ProjectCard';
import moment from 'moment';

export const ProjectList = () => {

  const { user_id } = useParams();

  const [userProjects, setUserProjects] = useState<any[]>([]);

  const token = localStorage.getItem('tokenAccess');

  useEffect(() => {
    axios.get(`http://localhost:3333/projects/${user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        setUserProjects(response.data);
        console.log(userProjects)
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  }, []);

  return (
    <div>
      { userProjects.map(project => {
        return (
          <ProjectCard key={project.id} projectTitle={project.name} 
          projectDate={ moment(project.created_at).format("DD/MM/YYYY hh:mm:ss") }
          projectDescription={project.tasks.description} projectFirstTask={project.tasks.name}  
          projectId={project.id}
          />
        )
      }) }
    </div>
  )
}
