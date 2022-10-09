import { useState, useEffect } from 'react';
import { redirect, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { Button } from '../../shared/components/Button/Button';
import { Modal } from '../../shared/components/modal/Modal';
import { TaskList } from './components/TaskList';
import { Layout } from '../../shared/layout/Layout';

export const ProjectDetails = () => {

  const { user_id, project_id } = useParams();
  const [project, setProject] = useState<any>([]);

  const [editModalOn, setEditModalOn] = useState(false);
  const [createModalOn, setCreateModalOn] = useState(false);

  const showModal = (modal: number) => {
    switch(modal) {
      case 1:
        return setEditModalOn(true);
      case 2:
        return setCreateModalOn(true);
    }
  }

  const redirect = useNavigate();

  const token = localStorage.getItem('tokenAccess');

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

  const deleteProject = () => {
    axios.delete(`http://localhost:3333/projects/${user_id}/${project_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log('response', response);
        alert('Project deleted!')
        redirect(`/home/${user_id}`);
      })
      .catch(err => {
        console.log('err', err.message)
      })
  }

  return (
    <>
      { editModalOn && (
        <Modal creationModal={ false } editModal={ true } modalTitle='Edit your project!' closeModal={() => setEditModalOn(false)}>
          Choose your project's new name!
        </Modal>
      ) }

      { createModalOn && (
        <Modal editModal={ false } creationModal={ true } modalTitle='Create a new Task!' closeModal={() => setCreateModalOn(false)} />
      )}

    <Layout phrase='Project details!'>
      <div>
        <div className="flex items-center justify-center bg-orange-100">
          <h1 className="font-bold text-3xl">{ project.name }</h1>
        </div>
        <div className="flex flex-row-reverse">
          <h2 className="text-sm p-2 bg-slate-200 mt-2 rounded-lg"> created at: { moment(project.created_at).format("DD/MM/YYYY hh:mm:ss") }</h2>
        </div>
        <div>
          <div className="flex items-center justify-center h-10 bg-orange-200 mt-6">
            <h1 className="font-bold tracking-widest text-slate-600">Tasks!</h1>
          </div>
          <TaskList />
        </div>
        <div className="flex items-center justify-center mb-4 mt-4">
          <Button name="Create a new task to the project!" onClick={() => showModal(2)} />
        </div>
        <div className="mt-4 p-4 bg-slate-200 flex items-center justify-center">
          <h1>Time Trackers!</h1>
          { project.tasks?.map((task: any) => {
            { task.timetrackers?.length === 0 ? (
              <div className="flex items-center flex-col justify-center p-4">
                <h1 className="text-white tracking-widest">No collaborators here!</h1>
              </div>
            ): (
              task.timetrackers?.map((timetracker: any) => {
                
              })
            ) }
          }) }
        </div>
        <div className="flex items-center justify-around mt-6 mb-4">
          <Button onClick={() => deleteProject()} name="Delete" className="bg-red-500" />
          <Button name="Edit" className="bg-blue-300" onClick={() => showModal(1)} />
        </div>
      </div>
    </Layout>
    </>
  )
}
