import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../contexts/hooks/useAppContext";

interface HeaderProps {
  isOpen(state: boolean): void;
}

export const Header: React.FC<HeaderProps> = ({ isOpen }) => {

  const redirect = useNavigate();
  const { user_id } = useParams();
  const { state, LogOut } = useAppContext();

  useEffect(() => {
    if (state.log === false && Boolean(localStorage.getItem('isLogged')) === false) {
        localStorage.clear();
        redirect('/login')
    }
  }, [])

  return (
    <div className="md:flex md:justify-around md:">
      <div className="grid grid-cols-3 p-6 border-b-2 border-orange-100 ">
      <div className="flex items-center justify-center"> 
        <button className="md:text-3xl rounded-lg p-2 hover:bg-orange-100 transition-all" onClick={ () => redirect(`/about/${user_id}`) }>
            Hello!
        </button>
      </div>
      <div className="md:text-3xl flex items-center justify-center">
        <button className="rounded-lg p-2 hover:bg-orange-100 transition-all" onClick={ () => isOpen(true) }>
          Menu!
        </button>
      </div>
      <div className="md:text-3xl flex items-center justify-center">
      { state.log === true || Boolean(localStorage.getItem('isLogged')) === true ? (
        <button className="rounded-lg p-2 hover:bg-orange-100 transition-all" onClick={ () => {
          LogOut();
          redirect('/login');
        } }>
          Log out!
        </button>
      ): (
        <button className="rounded-lg p-2 hover:bg-orange-100 transition-all" onClick={() => {
          redirect('/login')
        }}>
          Log in!
        </button>
      ) }
      </div>
      </div>
    </div>
  )
}
