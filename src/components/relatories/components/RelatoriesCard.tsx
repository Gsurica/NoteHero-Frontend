import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';


export const RelatoriesCard = () => {

  const { user_id } = useParams();
  const redirect = useNavigate();
  const token = localStorage.getItem('tokenAccess');

  const [timetrackers, setTimetrackers] = useState<any>([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/timetrackers/${user_id}`, {
      headers: {
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log(response.data);
        setTimetrackers(response.data);
      })
      .catch(err => {
        console.log(err.data)
      })
  }, []); 

  return (
    <div className="p-6">
      <div className="">
        <div>
          { timetrackers.timetrackers?.map((tt: any) => {
            return (
              <div className="">
                <div key={tt.id} className="bg-slate-200 shadow-xl mb-5 flex justify-center flex-col items-center">
                  <h1 className="bg-orange-200 p-2 mt-2 rounded-lg">Start Date: { moment(tt.startDate).format("DD/MM/YYYY hh:mm:ss") }</h1>
                  <h2 className="bg-slate-400 p-2 mt-2 mb-2 rounded-lg">End Date: { moment(tt.endDate).format("DD/MM/YYYY hh:mm:ss") }</h2>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-sm bg-orange-100 p-2 rounded-lg">Collaborator connected with this time tracker</h1>
                    <h1 className="p-2 bg-slate-600 text-white mt-2 mb-2">{ tt.collaborator.name }</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-sm bg-orange-100 p-2 rounded-lg">Task connected with this time tracker</h1>
                    <h1 className="p-2 bg-slate-600 text-white mt-2 mb-2">{ tt.task.name }</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="p-2 bg-slate-100 animate-pulse mb-1 rounded-lg">Time spending on that task: { tt.timeDiff } hour.</h1>
                  </div>
                </div>
              </div>
            )
          }) }
          <div className="flex items-center justify-center mb-4">
            <h1 className="mr-3">Time Trackers total: </h1>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <h1>{ timetrackers.timetrackers?.length }</h1>
            </div>
          </div>
          <div>
            <div className="justify-center flex items-center bg-slate-100 ">
              { timetrackers.dayHours?.map((day: any) => {
              return (
                <div>
                  <div>
                    <h1 className="p-2 bg-orange-100 m-2 rounded-lg">Hours spending today: </h1>
                    <div className="flex items-center justify-center flex-col">
                      <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                          <h3>Day: { day.month }</h3>
                        </div>
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                          <p>Hours: { day._sum.timeDiff }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) }
            </div>
            <div className="justify-center flex items-center bg-slate-100 mt-6">
              { timetrackers.monthHours?.map((month: any) => {
              return (
                <div>
                  <div>
                    <h1 className="p-2 bg-orange-100 m-2 rounded-lg">Hours spending that month: </h1>
                    <div className="flex items-center justify-center flex-col">
                     <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                          <h3>Month: { month.day }</h3>
                        </div>
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                          <p>Hours: { month._sum.timeDiff }</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
              )
            }) }
            </div>
            <div className="justify-center flex items-center bg-slate-100 mt-6">
              { timetrackers.yearHours?.map((year: any) => {
              return (
                <div>
                  <div>
                    <h1 className="p-2 bg-orange-100 m-2 rounded-lg">Hours spending that year: </h1>
                    <div className="flex items-center justify-center flex-col">
                     <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                          <h3>Year: { year.year }</h3>
                        </div>
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                          <p>Hours: { year._sum.timeDiff }</p>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
              )
            }) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
