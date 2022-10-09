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

  return (
    <div className="grid grid-cols-3 p-6 border-b-2 border-rose-100">
      <div className="flex items-center justify-center"> 
        <button className="rounded-lg p-2 hover:bg-rose-100 transition-all" onClick={ () => redirect(`/about/${user_id}`) }>
            Hello!
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-lg p-2 hover:bg-rose-100 transition-all" onClick={ () => isOpen(true) }>
          Menu!
        </button>
      </div>
      <div className="flex items-center justify-center">
      { state.log === true ? (
        <button className="rounded-lg p-2 hover:bg-rose-100 transition-all" onClick={ () => {
          LogOut();
          redirect('/login');
        } }>
          Log out!
        </button>
      ): (
        <button className="rounded-lg p-2 hover:bg-rose-100 transition-all">
          Log in!
        </button>
      ) }
      </div>
    </div>
  )
}
