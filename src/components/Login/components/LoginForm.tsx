import { Button } from '../../../shared/components/Button/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../contexts/hooks/useAppContext';

export const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { LogIn } = useAppContext();

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
        localStorage.setItem('isLogged', 'true');
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
        }} className="flex flex-col md:justify-center mt-10">
          <div className="flex flex-col md:justify-center md:items-center">
            <div className="p-4 flex flex-col">
              <input name="username" id="username" type="text" placeholder="username" className="p-1 md:w-72" value={ username } onChange={e => setUsername(e.target.value)} />
              <input name="password" id="password" type="password" placeholder="password" className="p-1 md:w-72 mt-5" value={ password } onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-center items-center">
              <Button name="Login!" onClick={ () => LogIn() } className="mt-10" />
            </div>
          </div>
        </form>
        <div className="md:flex md:justify-center p-5">
          <div className="mt-5 p-2 items-center justify-center flex bg-slate-400 rounded-lg text-white md:max-w-lg md:flex ">
            <a className="text-sm" href="/register">Do you not have an account? Register!</a>
          </div>
        </div>
      </div>
    </div>
  )
}
