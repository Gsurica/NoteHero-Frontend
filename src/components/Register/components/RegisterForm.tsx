import { Button } from '../../../shared/components/Button/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const RegisterForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  const createUser = ()  => {
    axios.post('http://localhost:3333/user', {
      username,
      password
    })
      .then(response => {
        console.log('Posting data', response);
        redirect('/login');
      })
      .catch(err => {
        alert(err.response.data.message)
        console.log('error', err)
      })
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }} className="flex flex-col">
          <div className="">
            <div className="p-4 flex flex-col">
              <input name="username" id="username" type="text" placeholder="username" className="p-1" value={ username } onChange={e => setUsername(e.target.value)} />
              <input name="password" id="password" type="password" placeholder="password" className="p-1 mt-5" value={ password } onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-center items-center">
              <Button type="submit" name="Create!" />
            </div>
          </div>
        </form>
        <div className="mt-5 p-2 items-center justify-center flex bg-slate-400 rounded-lg text-white">
          <a className="text-sm" href="/login">Do you Already have an account? Login!</a>
        </div>
      </div>
    </div>
  )
}
