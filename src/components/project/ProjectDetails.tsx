import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

export const ProjectDetails = () => {

  const { user_id, project_id } = useParams();
  const [project, setProject] = useState([]);

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
  }, [])

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mt-4 p-4 bg-orange-100 rounded-lg">
        <h1 className="font-bold text-3xl">{ project.name }</h1>
      </div>
      <div className="flex flex-row-reverse">
        <h2 className="text-sm p-2 bg-slate-200 mt-2 rounded-lg"> criado em: { moment(project.created_at).format("DD/MM/YYYY hh:mm:ss") }</h2>
      </div>
      <div>
        <div className="flex items-center justify-center h-10 bg-orange-200 mt-6">
          <h1 className="font-bold tracking-widest text-slate-600">Tasks!</h1>
        </div>
        { project.tasks?.map((task: any) => {
          return (
            <div className="bg-slate-400">
              <div className="flex items-center justify-center mt-6 text-white">
                <h1>{ task.name }</h1>
              </div>
              <div className="flex items-center justify-center p-2">
                <p className="tracking-wide bg-white p-2">{ task.description }</p>
              </div>
              { task.collaborator.length === 0 ? (
                <div className="flex items-center justify-center">
                  <p className="text-white tracking-widest">No collaborators yet! :(</p>
                </div>
                ): 
                <div className="flex items-center justify-center">
                  <h1>Collaborator: </h1>
                  { task.collaborator.map((collab: any) => {
                    <div key={collab.id}>
                      <h1>{ collab.name }</h1>
                    </div>
                  }) }
                </div>
              }
            </div>
          ) 
        }) }
      </div>
      <div className="mt-4 p-4 bg-slate-200 flex items-center justify-center">
        <h1>Time Trackers!</h1>
        <>
          { project.timetrackers?.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-white tracking-widest">No collaborators yet! :(</p>
            </div>
          ): (
            <p>
              { project.timetrackers?.map((timetrackers: any) => {
                return (
                <>
                  <div className="flex items-center justify-center flex-col">
                    <p> { timetrackers.startDate } </p>
                    <p> { timetrackers.endDate } </p>
                  </div>
                </>
                )
              }) }
            </p>
          ) }
        </>
      </div>
    </div>
  )
}
