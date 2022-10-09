import { Button } from '../../Button/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface CollabModalProps {
  modalTitle: string;
  closeModal(): void;
  children?: any;
}

export const CollabModal: React.FC<CollabModalProps> = ({ modalTitle, closeModal, children }) => {

  const redirect = useNavigate();

  const token = localStorage.getItem('tokenAccess');

  const [collabName, setCollabName] = useState("");
  
  const { user_id } = useParams();

  const createCollab = () => {
    axios.post(`http://localhost:3333/collab/${user_id}`, {
      name: collabName,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log('User post! ', response.data);
        redirect(`/collab/${user_id}`);
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
          <div className="mt-2 flex items-center justiofy-center flex-col mb-2 bg-orange-100">
            { children }
          </div>
          <div className="flex items-center justify-center bg-opacity-100 flex-col">
            <input className="p-4 mb-6 bg-zinc-100" placeholder="New Tittle" value={ collabName } id="task_name" name="task_name" onChange={ e => {
              setCollabName(e.target.value)
            } } />
          </div>
          <div className="flex items-center justify-around">
            <Button name="Edit Task!" className="p-3" onClick={() => createCollab()} />
            <Button name="Cancel!" className="p-3" onClick={() => closeModal()} />
          </div>
        </div>
      </div>
    </div>
  )
}
