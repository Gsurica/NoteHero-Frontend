import { Button } from '../../Button/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../../../../contexts/hooks/useAppContext';

interface ProjectModalProps {
  modalTitle: string;
  closeModal(): void;
  children?: any;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ modalTitle, closeModal, children }) => {

  const redirect = useNavigate();

  const { CloseModal } = useAppContext();

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
        window.location.reload()
      })
      .catch(err => {
        console.log('error', err.message)
      })
  }

  return (
    <div className="bg-zinc-200 bg-opacity-80 fixed insert-0 z-50">
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex-col justify-center bg-white rounded-lg p-10">
          <div className="flex text-lg items-center justify-center text-zinc-600 mb-5">
            <h1>{ modalTitle }</h1>
          </div>
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
          <div className="flex items-center justify-around">
            <Button name="Create Task!" className="p-3" onClick={() => createProject()} />
            <Button name="Cancel!" className="p-3" onClick={() => CloseModal()} />
          </div>
        </div>
      </div>
    </div>
  )
}