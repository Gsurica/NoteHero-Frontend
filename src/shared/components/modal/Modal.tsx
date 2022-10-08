import { Button } from '../Button/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ModalProps {
  modalTitle: string;
  closeModal(): void;
  editModal: boolean;
  creationModal: boolean;
  children?: any;
}


export const Modal: React.FC<ModalProps> = ({ modalTitle, closeModal, editModal, creationModal, children }) => {

  if( editModal ) {
    const { user_id, project_id } = useParams();
  
    const [projectNewName, setProjectNewName] = useState("");
  
    const token = localStorage.getItem('tokenAccess');
  
    const editProject = () => {
      axios.put(`http://localhost:3333/projects/${user_id}/${project_id}`, {
        newName: projectNewName,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + token,
        }
      })
        .then(response => {
          console.log('User edit! ', response.data);
          closeModal();
          window.location.reload();
        })
        .catch(err => {
          console.log('error', err.message);
          alert(err.response.data.message);
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
            <div className="flex items-center justify-center bg-opacity-100">
              <input className="p-4 mb-6 bg-zinc-100" placeholder="new Name" value={ projectNewName } id="newName" name="newName" onChange={ e => {
                setProjectNewName(e.target.value)
              } } />
            </div>
            <div className="flex items-center justify-around">
              <Button name="Edit!" className="p-3" onClick={() => editProject()} />
              <Button name="Cancel!" className="p-3" onClick={() => closeModal()} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if( creationModal ) {

    const token = localStorage.getItem('tokenAccess');
    const { user_id, project_id } = useParams();

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [user, setUser] = useState<any>([]);
    const [collab, setCollab] = useState('');

    useEffect(() => {
      axios.get(`http://localhost:3333/user/${user_id}`, {
        headers: {
          'Content-type': 'application/json',
          'authorization': 'Bearer ' + token
        }
      })
        .then(response => {
          console.log(response.data);
          setUser(response.data);
        })
        .catch(err => {
          console.log(err.message);
        })
    }, []);

    const createNewtask = () => {
      axios.post(`http://localhost:3333/tasks/${user_id}/${project_id}`, {
      description: taskDescription,
      task_name: taskName,
      collab_id: collab,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log('User post! ', response.data);
      })
      .catch(err => {
        console.log('error', err.response.data)
      })
    }

  console.log(collab);
  

    return (
      <div className="bg-zinc-200 bg-opacity-80 fixed insert-0 z-50">
        <div className="flex h-screen w-screen justify-center items-center">
          <div className="flex-col justify-center bg-white rounded-lg p-10">
            <div className="flex text-lg items-center justify-center text-zinc-600 mb-5">
              <h1>{ modalTitle }</h1>
            </div>
            <div className="flex items-center justify-center bg-opacity-100 flex-col">
              <input className="p-4 mb-6 bg-zinc-100" placeholder="Title" value={ taskName } id="task_name" name="task_name" onChange={ e => {
                setTaskName(e.target.value)
              } } />
              <input className="p-4 mb-6 bg-zinc-100" placeholder="Little description" value={ taskDescription } id="description" name="description" onChange={ e => {
                setTaskDescription(e.target.value)
              } } />
              <label className="bg-orange-100 p-2 mb-4">Choose your collab!</label>
              <select value={ collab } onChange={ e => setCollab(e.target.value) } name="collab_id" id="collab_id" className="mb-3">
                <option id="collaborators">Select</option>
                { user.collaborators?.map((collaborator: any) => {
                  return (
                    <option key={collaborator.id} id={ collaborator.id } value={ collaborator.id }>{ collaborator.name }</option>
                  )
                }) }
              </select>
            </div>
            <div className="flex items-center justify-around">
              <Button name="Create Task!" className="p-3" onClick={() => createNewtask()} />
              <Button name="Cancel!" className="p-3" onClick={() => closeModal()} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <></>
  )

}
