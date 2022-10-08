import { Button } from '../../../shared/components/Button/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  const loginUser = () => {
    axios.post('http://localhost:3333/user/login', {
      username,
      password
    })
      .then(response => {
        console.log('User Login', response.data);
        const token = response.data.token;
        const user_id = response.data.user.id;
        localStorage.setItem('tokenAccess', token);
        redirect(`/home/${user_id}`);
      })
      .catch(err => {
        console.log('Error', err);
        alert(err.response.data.message);
      })
  }

  return (
    <div>
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          loginUser();
        }} className="flex flex-col">
          <div className="">
            <div className="p-4 flex flex-col">
              <input name="username" id="username" type="text" placeholder="username" className="p-1" value={ username } onChange={e => setUsername(e.target.value)} />
              <input name="password" id="password" type="password" placeholder="password" className="p-1 mt-5" value={ password } onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-center items-center">
              <Button name="Login!" />
            </div>
          </div>
        </form>
        <div className="mt-5 p-2 items-center justify-center flex bg-slate-400 rounded-lg text-white">
          <a className="text-sm" href="/register">Do you not have an account? Register!</a>
        </div>
      </div>
    </div>
  )
}
