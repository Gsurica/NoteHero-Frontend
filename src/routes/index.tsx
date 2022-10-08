import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Collab } from "../components/collabs/Collab";
import { CollabForm } from "../components/collabs/components/CollabForm";
import { Home } from "../components/home/Home";
import { Login } from "../components/Login/Login";
import { Project } from "../components/project/Project";
import { ProjectDetails } from "../components/project/ProjectDetails";
import { Register } from "../components/Register/Register";
import { Task } from "../components/Task/Task";

export const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login"/> } />
        <Route path="/home/:user_id" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/project/:user_id" element={ <Project /> } />
        <Route path="/projects/:user_id/:project_id" element={ <ProjectDetails /> }/>
        <Route path="/collab/:user_id" element={ <Collab /> } />
        <Route path="/collab_register/:user_id" element={ <CollabForm /> } />
        <Route path="/tasks/:user_id/:project_id/:task_id" element={ <Task /> } />
      </Routes>
    </BrowserRouter>
  )
}