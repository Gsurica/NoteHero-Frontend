import React from 'react';
import { Button } from '../../Button/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface TaskModalProps {
  modalTitle: string;
  closeModal(): void;
  children?: any;
}


export const TaskModal: React.FC<TaskModalProps> = ({ modalTitle, closeModal, children }) => {

  const [newTaskName, setNewTaskName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCollab, setNewCollab] = useState('');
  const [user, setUser] = useState<any>([])

  useEffect(() => {
    axios.get(`http://localhost:3333/user/${user_id}`, {
      headers: {
        'Content-type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(err => {
        console.log(err.message);
      })

  }, [])

  const { user_id, project_id, task_id } = useParams();

  const token = localStorage.getItem('tokenAccess');

  const editTask = () => {
    axios.put(`http://localhost:3333/tasks/${user_id}/${project_id}/${task_id}`, {
      newTaskName: newTaskName,
      newDescription: newDescription,
      newCollab: newCollab
  }, {
    headers: {
      'authorization': 'Bearer ' + token,
    }
  })
    .then(response => {
      console.log('User post! ', response.data);
      closeModal();
      window.location.reload();
    })
    .catch(err => {
      console.log('error', err.response.data)
    })
  }  

  console.log(newCollab);
  

  return (
    <div className="bg-zinc-200 bg-opacity-80 fixed insert-0 z-50">
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex-col justify-center bg-white rounded-lg p-10">
          <div className="flex text-lg items-center justify-center text-zinc-600 mb-5">
            <h1>{ modalTitle }</h1>
          </div>
          <div className="flex items-center justify-center bg-opacity-100 flex-col">
            <input className="p-4 mb-6 bg-zinc-100" placeholder="New Tittle" value={ newTaskName } id="task_name" name="task_name" onChange={ e => {
              setNewTaskName(e.target.value)
            } } />
            <input className="p-4 mb-6 bg-zinc-100" placeholder="New Description" value={ newDescription } id="description" name="description" onChange={ e => {
              setNewDescription(e.target.value)
            } } />
            <label className="bg-orange-100 p-2 mb-4">Choose your collab!</label>
            <select value={ newCollab } onChange={ e => setNewCollab(e.target.value) } name="collab_id" id="collab_id" className="mb-3">
              <option id="collaborators">Select</option>
              { user.collaborators?.map((collaborator: any) => {
                return (
                  <option key={ collaborator.id } id={ collaborator.id } value={ collaborator.id }>{ collaborator.name }</option>
                )
              }) }
            </select>
          </div>
          <div className="flex items-center justify-around">
            <Button name="Edit Task!" className="p-3" onClick={() => editTask()} />
            <Button name="Cancel!" className="p-3" onClick={() => closeModal()} />
          </div>
        </div>
      </div>
    </div>
  )
}
