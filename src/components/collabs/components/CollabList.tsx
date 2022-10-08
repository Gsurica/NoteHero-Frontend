import { CollabCard } from "./CollabCard"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment';

export const CollabList = () => {

  const { user_id } = useParams();
  const token = localStorage.getItem('tokenAccess');
  const [collabs, setCollabs] = useState<any>([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/collab/${user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        console.log('response', response.data);
        setCollabs(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      { collabs.map((collab: any) => {
        return (
          <CollabCard name={ collab.name } registerDate={ moment(collab.created_at).format("DD/MM/YYYY hh:mm:ss") } />
        )
      }) }
    </div>
  )
}
