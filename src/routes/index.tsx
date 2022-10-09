import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { About } from "../components/About/About";
import { Collab } from "../components/collabs/Collab";
import { Home } from "../components/home/Home";
import { Login } from "../components/Login/Login";
import { ProjectDetails } from "../components/project/ProjectDetails";
import { Register } from "../components/Register/Register";
import { Relatories } from "../components/relatories/Relatories";
import { Task } from "../components/Task/Task";

export const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login"/> } />
        <Route path="/home/:user_id" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/projects/:user_id/:project_id" element={ <ProjectDetails /> }/>
        <Route path="/collab/:user_id" element={ <Collab /> } />
        <Route path="/tasks/:user_id/:project_id/:task_id" element={ <Task /> } />
        <Route path="/about/:user_id" element={ <About /> } />
        <Route path="/relatories/:user_id" element={ <Relatories /> } />
      </Routes>
    </BrowserRouter>
  )
}