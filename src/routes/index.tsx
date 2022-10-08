import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Login } from "../components/Login/Login";
import { Project } from "../components/project/Project";
import { ProjectDetails } from "../components/project/ProjectDetails";
import { Register } from "../components/Register/Register";

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
      </Routes>
    </BrowserRouter>
  )
}