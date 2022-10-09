import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../../contexts/hooks/useAppContext";

interface SideDrawerProps {
  isOpen(state: boolean): void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen }) => {

  const redirect = useNavigate();

  const { user_id } = useParams();

  const { LogOut } = useAppContext();

  return (
    <div className="">
      <div className="h-screen w-6/12 bg-slate-100 fixed md:w-80">
        <div className="flex items-center justify-around p-2 bg-orange-100">
          <h1>Menu</h1>
          <button className="w-10 h-10 bg-slate-100 rounded-full" onClick={() => isOpen(false)}>X</button>
        </div>
        <div>
          <div className="flex items-center justify-center bg-orange-100 mt-10 flex-col">
            <h1 className="md:text-xl">Navegação</h1>
          </div>
            <div>
              <nav className="flex flex-col mt-2 p-2">
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300" onClick={() => redirect(`/home/${user_id}`)}>
                  Home!
                </button>
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300" onClick={() => redirect(`/collab/${user_id}`)}>
                  Collabs!
                </button>
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300" onClick={() => redirect(`/relatories/${user_id}`)}> 
                  Relatories!
                </button>
              </nav>
            </div>
            <div className="flex items-center justify-center bg-orange-100 mt-10 flex-col">
              <h1 className="md:text-xl">Techs!!</h1>
            </div>
            <div>
              <nav className="flex flex-col mt-2 p-2">
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300">
                  <a href="https://www.prisma.io/">Prisma!</a>
                </button>
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300">
                  <a href="https://tailwindcss.com/">Tailwind!</a>
                </button>
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300"> 
                  <a href="https://nodejs.org/en/">Nodejs</a>
                </button>
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300"> 
                  <a href="https://www.typescriptlang.org/">Typescript</a>
                </button>
                <button className="mb-2 bg-orange-100 md:text-xl hover:scale-95 transition-all hover:bg-slate-300"> 
                  <a href="https://www.mysql.com/">Mysql</a>
                </button>
              </nav>
            </div>
            <div className="flex items-center justify-center bg-orange-100 mt-10 flex-col">
              <h1 className="md:text-xl">Log</h1>
            </div>
            <div>
              <nav className="flex flex-col mt-2 p-2">
                <button className="mb-2 hover:scale-95 transition-all bg-orange-100 md:text-xl hover:bg-slate-300" onClick={() => {
                  redirect('/login')
                  LogOut();
                }}>
                  Log out!
                </button>
              </nav>
            </div>
        </div>
      </div>
    </div>
  )
}
