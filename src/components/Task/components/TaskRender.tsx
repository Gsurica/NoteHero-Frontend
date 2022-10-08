import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Button } from '../../../shared/components/Button/Button';
import { TaskModal } from '../../../shared/components/modal/TaskModal/TaskModal';

export const TaskRender: React.FC = () => {

  const [task, setTask] = useState<any>([]);
  const [modal, setModal] = useState(false);

  const { user_id, project_id, task_id } = useParams();
  const token = localStorage.getItem('tokenAccess');

  const showModal = () => {
    setModal(true);
  }

  useEffect(() => {
    axios.get(`http://localhost:3333/tasks/${user_id}/${project_id}/${task_id}`, {
      headers: {
        'Content-type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
    .then(response => {
      console.log('task', response.data)
      setTask(response.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, []);

  return (
    <>
    { modal && (
      <TaskModal closeModal={() => setModal(false)} modalTitle="Edit your task!">
        <div className="flex items-center justify-center">
          <h1 className="tracking-widest font-bold">Edit your task!</h1>
        </div>
      </TaskModal>
    ) }
    <div className="flex p-4 flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center">
        <h1 className="tracking-widest text-3xl italic p-4 bg-orange-300 rounded-lg">{ task?.name }</h1>
        <p className="p-4 bg-slate-300 text-white mt-4 rounded-lg">{ task?.description }</p>
      </div>
      <div className="mt-2 animate-pulse">
        <h3 className="tracking-wide bg-slate-100 p-1">Task connected with { task?.project?.name }</h3>
      </div>
      <div className="justify-end">
        <h2 className="text-sm">Task created at { moment(task?.created_at).format('DD/MM/YYYY') }</h2>
      </div>
      <div className="mt-4 p-4">
        <div className="bg-slate-300 flex items-center justify-center flex-col">
          <h1 className="p-4">Collaborators!</h1>
          <div>
            { task.collaborator?.length === 0 ? (
              <div className="flex items-center flex-col justify-center p-4">
                <h1 className="text-white tracking-widest">No collaborators here!</h1>
              </div>
            ) : (
              <div className="flex items-center flex-col justify-center p-4">
                { task.collaborator?.map((collaborator: any) => {
                  return(
                    <div className="flex items-center flex-col justify-center">
                      <h1 className="tracking-widest p-4 mb-4 bg-orange-200 text-black">{ collaborator.name }</h1>
                    </div>
                  )
                }) }
              </div>
            ) }
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-around mb-6">
      <Button name="Delete!" />
      <Button name="Edit!" onClick={() => showModal()} />
    </div>
    </>
  )
}
