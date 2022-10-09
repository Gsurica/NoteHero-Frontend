import { Button } from '../../../shared/components/Button/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ProjectForm = () => {

  const redirect = useNavigate();

  const token = localStorage.getItem('tokenAccess');

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [firstTaskName, setFirstTaskName] = useState("");
  
  const { user_id } = useParams();

  const createProject = () => {
    axios.post(`http://localhost:3333/projects/${user_id}`, {
      name: projectName,
      task_name: firstTaskName,
      description: projectDescription,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log('User post! ', response.data);
        redirect(`/home/${user_id}`);
      })
      .catch(err => {
        console.log('error', err.message)
      })
  }

  return (
    <div className="flex h-screen flex-col justify-center p-4">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold tracking-widest">Create Project!</h1>
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        createProject();
      }} className="bg-slate-400 p-4 rounded-lg">
        <div className="flex flex-col items-center flex-1 mb-4">
          <input className="w-56 mb-2 p-2" placeholder="Project name" id="name" name="name" onChange={e => (
            setProjectName(e.target.value)
          )} value={projectName} />
          <input className="w-56 mb-2 p-2" placeholder="Description" id="description" name="description" onChange={e => (
            setProjectDescription(e.target.value)
          )} value={projectDescription} />
          <input className="w-56 p-2" placeholder="First Task" id="task_name" name="task_name" onChange={e => (
            setFirstTaskName(e.target.value)
          )} value={firstTaskName} />
        </div>
        <div className="flex items-center justify-center">
          <Button name="create!" />
        </div>
      </form>
    </div>
  )
}
