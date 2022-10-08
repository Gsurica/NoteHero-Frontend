import { Button } from '../../../shared/components/Button/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const CollabForm = () => {

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
    <div className="flex h-screen flex-col justify-center p-4">
      <form onSubmit={e => {
        e.preventDefault();
        createCollab();
      }} className="bg-slate-400 p-4 rounded-lg">
        <div className="flex flex-col items-center flex-1 mb-4">
          <input className="w-56 mb-2 p-2" placeholder="Collab name" id="name" name="name" onChange={e => (
            setCollabName(e.target.value)
          )} value={collabName} />
        </div>
        <div className="flex items-center justify-center">
          <Button name="Register!" />
        </div>
      </form>
    </div>
  )
}
